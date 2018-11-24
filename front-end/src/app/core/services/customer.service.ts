import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from '../models/customer';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private baseUrl = 'http://localhost:8081/api/customers'; // URL to web api

  constructor(private http: HttpClient) {}

  getCustomerList() {
    return this.http.get(this.baseUrl);
  }
  getCustomer(id: number) {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  deleteCustomer(id: number) {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  addCustomer(customer: Customer) {
    return this.http.post(this.baseUrl, customer );
  }

  editCustomer(customer: Customer) {
    return this.http.put(`${this.baseUrl}/${customer.id}`, customer);
  }
}
