import { Component, OnDestroy, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/customer.model';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css'],
})
export class CustomersComponent implements OnInit, OnDestroy {
  customers: Customer[] = [];
  constructor(private customerService: CustomerService) {}

  ngOnInit(): void {
    this.customerService.getCustomers().subscribe((customers) => {
      this.customers = customers;
      /* this.isDeleteLoading = pokemons.map((p) => ({
        id: p.id,
        isLoading: false,
      })); */
    });
  }

  ngOnDestroy(): void {
    console.log('component destroyed');
  }
}
