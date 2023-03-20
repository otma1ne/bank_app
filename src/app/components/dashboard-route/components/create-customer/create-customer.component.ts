import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Customer } from 'src/app/models/customer.model';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css'],
})
export class CreateCustomerComponent {
  customer?: Customer;
  customerForm: FormGroup;
  isLoading = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private customerService: CustomerService
  ) {
    this.customerForm = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required]],
      gender: ['Male', [Validators.required]],
      address: ['', [Validators.required]],
      accountType: ['saving', [Validators.required]],
    });
  }

  submit() {
    this.isLoading = true;
    this.customerService
      .createCustomer(this.customerForm.value)
      .subscribe((customer: Customer) => {
        this.isLoading = false;
        this.customerForm.reset();
        this.router.navigate(['/dashboard/customers']);
      });
  }

  canSubmit(): boolean {
    return this.customerForm.dirty && this.customerForm.valid;
  }

  getControl(controlName: string) {
    return this.customerForm.get(controlName);
  }
}
