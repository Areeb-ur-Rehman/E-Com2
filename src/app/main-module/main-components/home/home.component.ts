import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @ViewChild('FileSelect') FileSelect: ElementRef | any;

  color = ["Red", "Black", "Blue", "Pink"];
  categories =["Cap", "Hoodies", "Watch", "Bags"];
  selectSize = ["S", "M", "L", "X-L", "XX-L"];
  newSizeArray: any = [];
  imagearray: any = [];
  disableButtonTrue: boolean = false ;
  myProductForm: FormGroup | any
  ProductService: any;
  constructor(
    private formBuilder: FormBuilder,

    ) { this.buildForm() }

  ngOnInit(): void {
  }

  buildForm() {
    this.myProductForm = this.formBuilder.group({
      productName: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(100)]),
      quantity: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]*$/)]),
      price: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]*$/)]),
      description: new FormControl('', Validators.required),
      color: new FormControl('', [Validators.required, Validators.pattern(/^[A-Za-z]+$/)]),
      companyName: new FormControl('', [Validators.required, Validators.pattern(/^[A-Za-z]+$/)]),
      category: new FormControl('', Validators.required),
      size: new FormArray([]),
      productMaterial: new FormControl('', Validators.required)
    })
  }

  getSize(event: any) {
    if (event.target.checked ) {
      this.newSizeArray.push(event.target.value)
    }
    else {
      this.newSizeArray = this.newSizeArray.filter((value: any) => value != event.target.value);
    }
  }

  getImages(event: any) {
    let filesLength = event.target.files.lenght;
    if (event.target.files.lenght  <= 5)  {
      [...event.target.files].forEach(file => this.imagearray.push(file));
      this.disableButtonTrue = false;
    } else {
      this.imagearray = [];
      this.FileSelect.nativeElement.value = null;
      this.disableButtonTrue = true;
      // this.ToastrService.warning(`Image selection limit is 5 but you have selected ${filesLength}`);
    }
  }

  submitProducrForm() {
    this.newSizeArray.forEach ((elememts: string) => {
      let formControl = new FormControl(Element);
      this.myProductForm.get("size").push(FormControl);

    })

    let MultiPartFormData = new FormData();
    MultiPartFormData.append('productName', this.myProductForm.get('productName').value);
    MultiPartFormData.append('quantity', this.myProductForm.get('quantity').value);
    MultiPartFormData.append('price', this.myProductForm.get('price').value);
    MultiPartFormData.append('description', this.myProductForm.get('description').value);
    MultiPartFormData.append('color', this.myProductForm.get('color').value);
    MultiPartFormData.append('companyName', this.myProductForm.get('companyName').value);
    MultiPartFormData.append('category', this.myProductForm.get('category').value);
    MultiPartFormData.append('size', this.myProductForm.get('size').value);
    MultiPartFormData.append('productMaterial', this.myProductForm.get('productMaterial').value);
    // MultiPartFormData.append('image',this.myProductForm.get('image').value);
    this.imagearray.forEach((ImagesData: any) => {
      MultiPartFormData.append('images', ImagesData);//Appending values to the getData varibale from FormGroup
    })

    this.ProductService.CreateProductCard(MultiPartFormData).subscribe((ResponseComingFromBackend: any) => {
      // this.ToastrService.success(ResponseComingFromBackend.Message);
      this.myProductForm.reset();
      this.FileSelect.nativeElement.value = null;
    })

  }

}
