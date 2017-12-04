import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs/Observable';

import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { CustomerPipePipe } from './shared/customer-pipe.pipe';
import { StarComponent } from './star/star.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    CustomerPipePipe,
    StarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    // Observable
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
