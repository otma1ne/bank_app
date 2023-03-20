import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Customer } from 'src/app/models/customer.model';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-update-costumer',
  templateUrl: './update-costumer.component.html',
  styleUrls: ['./update-costumer.component.css'],
})
export class UpdateCostumerComponent {
  customer?: Customer;
  customerForm: FormGroup;
  isLoading = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private activeRoute: ActivatedRoute,
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

  ngOnInit(): void {
    this.activeRoute.params
      .pipe(
        switchMap((params) =>
          this.customerService.getCustomerById(params['id'])
        )
      )
      .subscribe({
        next: (customer) => {
          this.customer = customer;
          this.customerForm.setValue({
            firstName: customer.firstName,
            lastName: customer.lastName,
            email: customer.email,
            gender: customer.gender || 'Male',
            address: customer.address,
            accountType: customer.accountType || 'saving',
          });
        },
        error: () => {
          this.router.navigate(['/not-found']);
        },
      });
  }

  submit() {
    this.isLoading = true;
    this.customerService
      .updateCustomer(this.customerForm.value, this.customer?.id)
      .subscribe((customer: Customer) => {
        this.isLoading = false;
        this.customerForm.reset();
        this.router.navigate(['/dashboard/customers']);
      });
  }

  canSubmit(): boolean {
    return this.customerForm.valid;
  }

  getControl(controlName: string) {
    return this.customerForm.get(controlName);
  }
}
