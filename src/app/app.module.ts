import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';
// import { Observable } from 'rxjs/Observable';

import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { CustomerPipePipe } from './shared/customer-pipe.pipe';
import { StarComponent } from './star/star.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { WelcomeComponent } from './home/welcome.component';
import { ProductGuardService } from './service/product-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    CustomerPipePipe,
    StarComponent,
    ProductDetailComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'products', component: ProductListComponent},
      { path: 'product/:id', canActivate: [ProductGuardService],component: ProductDetailComponent},
      { path: 'welcome', component: WelcomeComponent},
      { path: '', redirectTo:'welcome', pathMatch:'full'},
      { path: '**', redirectTo:'welcome', pathMatch:'full'}
    ])
    // Observable
  ],
  providers: [ProductGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
