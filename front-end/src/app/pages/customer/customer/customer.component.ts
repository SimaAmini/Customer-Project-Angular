import { Component, OnInit, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';

import { CustomerService } from 'src/app/core/services/customer.service';
import { Customer } from 'src/app/core/models/customer';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

  customer: Customer = new Customer();
  formState: string;
  @ViewChild('CustomerForm') CustomerForm;
  message = '';

  constructor(
    private _CustomerService: CustomerService,
    private router: Router,
    private activeRoute: ActivatedRoute,
    private _location: Location
  ) {}

  ngOnInit() {
    this.activeRoute.params.subscribe(params => {
      if (params.id !== 'new') {
        this.formState = 'edit';
        this.fnGetCustomer(params.id);
      } else {
        this.customer = new Customer();
        this.formState = 'add';
      }
    });
  }

  fnAddCustomer() {

    if (this.CustomerForm.valid) {
      this._CustomerService.addCustomer(this.customer).subscribe((response: any) => {
        if (response.success) {
          this.router.navigate(['/customer/list']);
        }
      });
    } else {
      this.message = 'لطفا داده های ورودی را چک کنید';
    }
  }

  fnEditCustomer() {
    this._CustomerService.editCustomer(this.customer).subscribe((response: any) => {
      if (response.success) {
        this.router.navigate(['/customer/list']);
      }
    });
  }

  fnGetCustomer(id) {
    this._CustomerService.getCustomer(id).subscribe((response: any) => {
      this.customer = response;
    });
  }

  fnBack() {
    this._location.back();
  }
}
