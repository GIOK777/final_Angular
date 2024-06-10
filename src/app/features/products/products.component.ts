import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Product } from '@app-shared/interfaces';
import { ProductService } from '@app-shared/services';
import { ProductPreviewComponent } from '@app-shared/ui';

import { tap } from 'rxjs';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [ProductPreviewComponent, RouterOutlet],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export default class ProductsComponent implements OnInit {
  private readonly productService = inject(ProductService);

  readonly products: Product[] = [];

  ngOnInit(): void {
    this.productService
      .getProducts()
      .pipe(
        tap((response) => {
          response.products.forEach((product) => {
            this.products.push(product);
          });
        }),
      )
      .subscribe();
  }
}
