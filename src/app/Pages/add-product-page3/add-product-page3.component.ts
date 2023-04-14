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

  mergedObject = {};

  fieldsData = [
    { name: 'Name', pattern: /^[A-Za-z\s]+$/ },
    { name: 'Phone', pattern: /^[0-9]{10}$/ },
    { name: 'Email', pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ }
  ];
  
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.data = params['formData'];
    });
  }

  submitForm() {

    const ContactData: Contact = new Contact(
      this.userForm['Name'],
      this.userForm['Phone'],
      this.userForm['Email']
    );
    const parsedData = JSON.parse(this.data);

    const currentDate = new Date();
    const month = currentDate.getMonth() + 1; // Note: Month starts from 0, so add 1 to get the correct month (e.g., January is 0)
    const day = currentDate.getDate(); // e.g., 14

    const product: Item= 
      new Item(
        parsedData.Name,
        parsedData.Description,
        '../assets/Images/ItemsImages/Iphone.png',
        parseInt(parsedData.Price),
        day.toString()+"/"+month.toString(),
        parsedData.Location,
        parsedData.Category,
        parsedData.Condition,
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