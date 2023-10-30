import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { HomeModule } from '../home/home.module';
import { pagesRoute } from './pages.route';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule,
    RouterModule.forChild(pagesRoute),
    HomeModule,
  ],
  exports: [
    RouterModule
  ]
})
export class PagesModule { }
