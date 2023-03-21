import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from '../models/customer.model';
import { CustomerFormData } from '../models/customer-form-data.model';

const API_URL = 'http://localhost:3000/customers';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  constructor(private http: HttpClient) {}

  getCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(API_URL);
  }

  getCustomerById(id: number): Observable<Customer> {
    return this.http.get<Customer>(`${API_URL}/${id}`);
  }

  search(name: string): Observable<Customer[]> {
    return this.http.get<Customer[]>(`${API_URL}?q=${name}`);
  }

  createCustomer(customerFormData: Customer): Observable<Customer> {
    return this.http.post<Customer>(API_URL, customerFormData);
  }

  updateCustomer(
    customerFormData: CustomerFormData,
    id: any
  ): Observable<Customer> {
    return this.http.put<Customer>(`${API_URL}/${id}`, customerFormData);
  }

  deleteCustomer(customer: Customer) {
    return this.http.delete(`${API_URL}/${customer.id}`);
  }
}
