import { Component } from '@angular/core';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  customerNumber: number = 0;
  constructor(private customerService: CustomerService) {}

  ngOnInit() {
    this.customerService.getCustomers().subscribe((customers) => {
      this.customerNumber = customers.length;
    });
  }
}
