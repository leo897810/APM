import { Component } from '@angular/core';
import { ProductService } from './service/product.service';

@Component({
  selector: 'pm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ProductService]
})
export class AppComponent {
  title = 'Angular: Getting Started';
}
