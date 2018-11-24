import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/core/models/customer';
import { CustomerService } from 'src/app/core/services/customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {
  customerList: Customer[] = [];
  dataGridSource: any[] = [];
  constructor(private _CustomerService: CustomerService) {}

  ngOnInit() {
    this.fnGetCustomerList();
  }
  fnGetCustomerList() {
    this._CustomerService.getCustomerList().subscribe((response: any) => {
      this.customerList = response;
    });
  }
  fnDeleteCustomer(id) {
    this._CustomerService.deleteCustomer(id).subscribe((response: any) => {
      if (response.success) {
        const deletedId = response.id;
        this.customerList.splice(this.customerList.findIndex(e => e.id === deletedId), 1);
      }
    });
  }
}
