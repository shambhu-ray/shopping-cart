import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrandPipe } from './pipes/brand.pipe';
import { PriceFormatterPipe } from './pipes/price-formatter.pipe';
import { ShortenTitlePipe } from './pipes/shorten-title.pipe';



@NgModule({
  declarations: [
    BrandPipe,
    PriceFormatterPipe,
    ShortenTitlePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BrandPipe, PriceFormatterPipe, ShortenTitlePipe
  ]
})
export class SharedModule { }
