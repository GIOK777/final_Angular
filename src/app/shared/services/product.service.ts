import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Product, Products } from '@app-shared/interfaces';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private readonly http = inject(HttpClient); // DI

  readonly baseUrl = 'https://api.everrest.educata.dev/shop/products';

  getProducts() {
    return this.http.get<Products>(`${this.baseUrl}/all?page_size=50`);
  }

  getProductById(id: string) {
    return this.http.get<Product>(`${this.baseUrl}/id/${id}`);
  }
}
