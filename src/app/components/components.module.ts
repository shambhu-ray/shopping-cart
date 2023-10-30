import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material.module';
import { SharedModule } from '../shared/shared.module';
import { ActionButtonComponent } from './action-button/action-button.component';
import { BrandFilterComponent } from './brand-filter/brand-filter.component';
import { ProductCardComponent } from './product-card/product-card.component';



@NgModule({
  declarations: [ActionButtonComponent, BrandFilterComponent, ProductCardComponent],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    SharedModule
  ],
  exports: [
    ActionButtonComponent,
    BrandFilterComponent,
    ProductCardComponent,
    RouterModule,
    SharedModule,
    MaterialModule
  ]
})
export class ComponentsModule { }
