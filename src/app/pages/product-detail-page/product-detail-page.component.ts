import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products.service';

export interface IProduct {
  id: string;
  name: string;
}

@Component({
  selector: 'edu-product-detail-page',
  standalone: true,
  imports: [],
  templateUrl: './product-detail-page.component.html',
  styleUrl: './product-detail-page.component.css',
})
export class ProductDetailPageComponent implements OnInit {
  activateRoute = inject(ActivatedRoute);
  _productService = inject(ProductsService);

  product: null | IProduct = null;

  ngOnInit(): void {
    const { id } = this.activateRoute.snapshot.params;
    this._productService.getProductById(id).subscribe((product) => {
      this.product = product;
    });
  }
}
