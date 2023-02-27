import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {
  @Input() title: string | undefined;
  @Input() fields: { name: string; pattern: RegExp }[] | undefined;
  @Input() formData: any;

  submitted = false;

  validateField(field: string): boolean {
    const fieldObj = this.fields!.find(f => f.name === field);

    const pattern = fieldObj!.pattern;
    const fieldValue = this.formData[field];

    if (this.formData[field] === "" ||this.formData[field] === undefined) {
      return true; // field not found, assume valid
    }

    if (!fieldObj) {
      return true; // field not found, assume valid
    }

    if (!fieldValue || !fieldValue.match(pattern) ) {
      return false; // pattern not matched, input is invalid
    }

    return true; // pattern matched, input is valid
  }

  ngOnInit(): void {
    // Validate all fields on page load
    Object.keys(this.formData).forEach((field) => {
      this.validateField(field);
    });
  }
}
