import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AppComponent } from './app.component';
import { appRoutes } from './app.route';
import { HeaderComponent } from './header/header.component';
import { MaterialModule } from './material.module';
import { PagesModule } from './pages/pages.module';
import { ProductEffects } from './store/product/product.effects';
import { StoreFacade } from './store/store.facade';
import { reducers } from './store/store.reducer';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    PagesModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([ProductEffects]),
    NgbModule,
    MaterialModule
  ],
  providers: [StoreFacade],
  bootstrap: [AppComponent]
})
export class AppModule { }
