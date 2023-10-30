import { CommonModule, NgOptimizedImage, provideImgixLoader } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from '../components/components.module';
import { BrandPipe } from '../shared/pipes/brand.pipe';
import { HomeComponent } from './home.component';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgOptimizedImage,
    ComponentsModule
  ],
  providers: [
    BrandPipe,
    provideImgixLoader("https://productimages.hepsiburada.net/"),
  ]
})
export class HomeModule { }
