import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerComponent } from './customer/customer.component';
import { CustomerListComponent } from './customer-list/customer-list.component';

import { FormsModule } from '@angular/forms';
import { DxDataGridModule, DxSelectBoxModule } from 'devextreme-angular';

@NgModule({
  declarations: [CustomerComponent, CustomerListComponent],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    FormsModule,
    DxDataGridModule,
    DxSelectBoxModule
  ]
})
export class CustomerModule {}
