import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Contact from 'src/Models/Contact.model';
import Item from 'src/Models/Item.model';
import products from 'src/Models/ItemData.model';

@Component({
  selector: 'app-add-product-page3',
  templateUrl: './add-product-page3.component.html',
  styleUrls: ['./add-product-page3.component.scss']
})
export class AddProductPage3Component {
  semititle1text = "LAST PART!! ";
  subtitletext1 ="Now all we need is your details so buyers can contact you proparly.";

  products: Item[] = products;

  userForm = {
    Name: '',
    Phone: 0,
    Email: ''
  };
    data: any = {};

  fieldsData = [
    { name: 'Name', pattern: /^[A-Za-z\s]+$/ },
    { name: 'Phone', pattern: /^[0-9]{10}$/ },
    { name: 'Email', pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ }
  ];
  
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.data = params['data'];
    });
  }

  submitForm() {

    const ContactData: Contact = new Contact(
      this.userForm['Name'],
      this.userForm['Phone'],
      this.userForm['Email']
    );

    const product: Item= 
      new Item(
        'iPhone 13 pro',
        'Selling my iPhone, brand new conditi...',
        '../assets/Images/ItemsImages/Iphone.png',
        499,
        '12/02',
        'Afula',
        'electronics',
        'New',
        ['../assets/Images/ItemsImages/Iphone.png'],
        ContactData
              )   ;

    // Navigate to the next page and pass the form data as query parameters
    // this.router.navigate(['/Home'], {queryParams: { formData: JSON.stringify(this.data)},});
    // this.router.navigate(['/NewListing3'], {queryParams: { formData1: JSON.stringify(this.data),formData2: JSON.stringify(this.userForm) },});
    this.products.push(product);
    //add new
    //redirect to home/item page
  }
}


// (
//   title = '',
//   desc = '',
//   image = '',
//   price = 0,
//   postDate = '',
//   location = '',
//   category = '',
//   condition = '',
//   images: string[] = [],
//   contact: Contact = new Contact('', 0, ''),
//   id = 0
// ) 