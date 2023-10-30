import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { ComponentsModule } from '../../components/components.module';
import { ProductDetailsComponent } from './product-details.component';
import { productChildRoutes } from './product-details.route';


@NgModule({
  declarations: [ProductDetailsComponent],
  imports: [
    RouterModule.forChild(productChildRoutes),
    CommonModule,
    ComponentsModule
  ]
})
export class ProductDetailsModule { }
