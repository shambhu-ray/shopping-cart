import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { ComponentsModule } from 'src/app/components/components.module';
import { CartComponent } from './cart.component';
import { cartRoutes } from './cart.route';
import { CartService } from './cart.service';


@NgModule({
  declarations: [CartComponent],
  imports: [
    RouterModule.forChild(cartRoutes),
    CommonModule,
    ComponentsModule
  ],
  providers: [
    CartService
  ]
})
export class CartModule { }
