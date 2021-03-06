import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { OptionSelectionComponent } from './product-builder/option-selection/option-selection.component';
import { ProductBuilderComponent } from './product-builder/product-builder.component';
import { ProductOrderingComponent } from './product-ordering/product-ordering.component';
import {FormsModule} from '@angular/forms';
import { ProductSummaryComponent } from './product-builder/product-summary/product-summary.component';
import {HttpModule} from '@angular/http';
import {AppRoutingModule} from './app.route';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';

@NgModule({
  declarations: [
    AppComponent,
    OptionSelectionComponent,
    ProductBuilderComponent,
    ProductOrderingComponent,
    ProductSummaryComponent,
    ShoppingCartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
