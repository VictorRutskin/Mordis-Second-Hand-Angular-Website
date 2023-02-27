import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-product-page3',
  templateUrl: './add-product-page3.component.html',
  styleUrls: ['./add-product-page3.component.scss']
})
export class AddProductPage3Component {
  semititle1text = "LAST PART!! ";
  subtitletext1 ="Now all we need is your details so buyers can contact you proparly.";


  userForm = {};  
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
    // Navigate to the next page and pass the form data as query parameters
    this.router.navigate(['/Home'], {queryParams: { formData: JSON.stringify(this.data)},});
    // this.router.navigate(['/NewListing3'], {queryParams: { formData1: JSON.stringify(this.data),formData2: JSON.stringify(this.userForm) },});
  }
}
