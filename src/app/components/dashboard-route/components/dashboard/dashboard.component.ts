import { Component } from '@angular/core';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  customerNumber: number = 0;
  amount: number = 0;
  constructor(private customerService: CustomerService) {}

  ngOnInit() {
    this.customerService.getCustomers().subscribe((customers) => {
      this.customerNumber = customers.length;
      this.amount = customers.reduce((acc, currentValue) => {
        return acc + currentValue.amount;
      }, 0);
    });
  }
}
