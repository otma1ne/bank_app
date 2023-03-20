import { Component, OnDestroy, OnInit } from '@angular/core';
import { debounceTime, distinctUntilChanged, Subject } from 'rxjs';
import { Customer } from 'src/app/models/customer.model';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css'],
})
export class CustomersComponent implements OnInit, OnDestroy {
  customers: Customer[] = [];
  selectedCustomer?: Customer;
  searchQuery = '';
  searchQuerySubject = new Subject<string>();
  isshowPopup = false;

  constructor(private customerService: CustomerService) {
    this.searchQuerySubject
      .pipe(debounceTime(500), distinctUntilChanged())
      .subscribe((query: string) => {
        this.search(query);
      });
  }

  ngOnInit(): void {
    this.customerService.getCustomers().subscribe((customers) => {
      this.customers = customers;
    });
  }

  ngOnDestroy(): void {
    console.log('component destroyed');
  }

  search(query: string) {
    this.customerService.search(query).subscribe((customer) => {
      this.customers = customer;
    });
  }

  onQuery(event: any) {
    this.searchQuerySubject.next(event.target.value);
  }

  delete(customer: Customer) {
    this.customerService.deleteCustomer(customer).subscribe(() => {
      this.customers = this.customers.filter((c) => c.id !== customer.id);
      this.isshowPopup = false;
    });
  }

  showPopup(value: boolean, customer?: Customer) {
    this.selectedCustomer = customer;
    this.isshowPopup = value;
  }
}
