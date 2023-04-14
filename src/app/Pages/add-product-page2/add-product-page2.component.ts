import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-product-page2',
  templateUrl: './add-product-page2.component.html',
  styleUrls: ['./add-product-page2.component.scss'],
})
export class AddProductPage2Component {
  semititle1text = 'ALMOST THERE.. ';
  subtitletext1 = 'This is the part where you show off you item,';
  subtitletext2 = 'Take some pics and add them here.';

  userForm = {};
  data: any = {};

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.data = params['formData'];
    });
  }

  submitForm() {
    // Navigate to the next page and pass the form data as query parameters
    this.router.navigate(['/NewListing3'], {
      queryParams: { formData: this.data },
    });
    // this.router.navigate(['/NewListing3'], {queryParams: { formData1: JSON.stringify(this.data),formData2: JSON.stringify(this.userForm) },});
  }
  
}
