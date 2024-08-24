import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products.service';

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

  ngOnInit(): void {
    const { id } = this.activateRoute.snapshot.params;
    this._productService.getProductById(id);
    // subscribe to http value.
  }
}
