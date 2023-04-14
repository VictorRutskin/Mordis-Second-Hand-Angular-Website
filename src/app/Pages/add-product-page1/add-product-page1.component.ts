import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  userForm: FormGroup;
  fieldsData = [
    { name: 'Name', pattern: /^[A-Za-z\s]+$/ },
    { name: 'Category', pattern: /^[A-Za-z\s]+$/ },
    { name: 'Condition', pattern: /^[A-Za-z\s]+$/ },
    { name: 'Price', pattern: /^[0-9]+(\.[0-9]{1,2})?$/ },
    { name: 'Location', pattern: /^[A-Za-z\s]+$/ },
    { name: 'Description', pattern: /^[A-Za-z\s]+$/ },
  ];
  constructor(private route: ActivatedRoute, private router: Router, private formBuilder: FormBuilder) {
    this.userForm = this.formBuilder.group({
      name: ['', Validators.required],
      category: ['', Validators.required],
      price: ['', Validators.required],
      // Add more form controls as needed
    });
  }
  submitForm() {
    // Retrieve form values
    const name = this.userForm.get('name')!.value;
    const category = this.userForm.get('category')!.value;
    const price = this.userForm.get('price')!.value;
    // Perform validation on category
    if (
      !['clothing', 'electronics', 'furniture', 'other'].includes(
        category.toLowerCase()
      )
    ) {
      // Display an error alert if the category is not valid
      alert(
        'Invalid category. Allowed values are clothing, electronics, furniture, or other.'
      );
      return;
    }

    // Perform validation on name
    if (name.length > 30) {
      // Display an error alert if the name is too long
      alert('Name must be 30 characters or less.');
      return;
    }

    if (price.length > 99999) {
      // Display an error alert if the name is too long
      alert('Price must be 99999 or less.');
      return;
    }

    // Form is valid, continue with form submission or further processing
    // Navigate to the next page and pass the form data as query parameters
    this.router.navigate(['/NewListing2'], {
      queryParams: { formData: JSON.stringify(this.userForm) },
    });
  }
}
