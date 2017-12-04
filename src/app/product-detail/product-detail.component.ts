import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from '../products/product';
import { ProductService } from '../service/product.service';
import { error } from 'util';

@Component({
  // selector: 'pm-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  pageTitle: string = 'Product Detail';
  product: IProduct;
  products: IProduct[];
  constructor(private router: ActivatedRoute, 
              private productService: ProductService, 
              private http: Router) { }

  ngOnInit() {
    let id = +this.router.snapshot.paramMap.get('id');
    this.productService.getProducts().subscribe(
                    products => this.product = this.getProduct(products,id)
    );
  }

  getProduct(products:IProduct[], id:number ): IProduct{
    for (let item of products){
      if(item.productId == id){
        return item;
      }
    }
  }
  
  onBack(): void {
    this.http.navigate(['/products']);
  }

}
