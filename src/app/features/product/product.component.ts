import { DatePipe } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Product } from '@app-shared/interfaces';
import { ProductService } from '@app-shared/services';
import { EMPTY, catchError, filter, tap } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
})
export default class ProductComponent {
  private readonly title = inject(Title);
  private readonly router = inject(Router);
  private readonly activedRoute = inject(ActivatedRoute);
  private readonly productService = inject(ProductService);

  id = this.activedRoute.snapshot.params['id'];

  product: Product | null = null;

  constructor() {
    this.router.events
      .pipe(
        takeUntilDestroyed(),
        filter((event) => event instanceof NavigationEnd),
        tap(() => {
          this.id = this.activedRoute.snapshot.params['id'];
          this.productService
            .getProductById(this.id)
            .pipe(
              tap((product) => {
                this.product = product;
                this.title.setTitle(product.title);
              }),
              catchError(() => {
                setTimeout(() => {
                  this.router.navigateByUrl('/products');
                }, 5000);
                return EMPTY;
              }),
            )
            .subscribe();
        }),
      )
      .subscribe();
  }
}
