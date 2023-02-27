import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-product-page1',
  templateUrl: './add-product-page1.component.html',
  styleUrls: ['./add-product-page1.component.scss'],
})
export class AddProductPage1Component {
  semititle1text = 'WANT TO JOIN THE ';
  semititle2text = ' MOVMENT?';
  subtitletext1 =
    'We are so happy you want to give your gentley used items a second life.';
  subtitletext2 = 'Let’s get started!';
  userForm = {};
  fieldsData = [
    { name: 'Name', pattern: /^[A-Za-z\s]+$/ },
    { name: 'Category', pattern: /^[A-Za-z\s]+$/ },
    { name: 'Condition', pattern: /^[A-Za-z\s]+$/ },
    { name: 'Price', pattern: /^[0-9]+(\.[0-9]{1,2})?$/ },
    { name: 'Location', pattern: /^[A-Za-z\s]+$/ },
    { name: 'Description', pattern: /^[A-Za-z\s]+$/ },
  ];

  constructor(private route: ActivatedRoute, private router: Router) {}

  submitForm() {
    // Navigate to the next page and pass the form data as query parameters
    this.router.navigate(['/NewListing2'], {
      queryParams: { formData: JSON.stringify(this.userForm) },
    });
  }
}
