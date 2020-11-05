import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HeroListComponent } from './hero-list/hero-list.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { BackendService } from './backend.service';
import { SalesTaxComponent } from './sales-tax/sales-tax.component';
import { SalesTaxService } from './sales-tax.service';
import { TaxRateService } from './tax-rate.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, HeroListComponent, HeroDetailComponent, SalesTaxComponent ],
  bootstrap:    [ AppComponent ],
  providers: [BackendService, SalesTaxService, TaxRateService]
})
export class AppModule { }
