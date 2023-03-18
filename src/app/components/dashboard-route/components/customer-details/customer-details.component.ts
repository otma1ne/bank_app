import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Customer } from 'src/app/models/customer.model';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css'],
})
export class CustomerDetailsComponent implements OnInit {
  customer?: Customer;
  constructor(
    private customerService: CustomerService,
    private activeRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activeRoute.params
      .pipe(
        switchMap((params) =>
          this.customerService.getCustomerById(params['id'])
        )
      )
      .subscribe({
        next: (customer) => (this.customer = customer),
        error: () => {
          this.router.navigate(['/not-found']);
        },
      });
  }

  navigateToCustomerList() {
    this.router.navigate(['dashboard/customers']);
  }
}
