import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Product } from '@app-shared/interfaces';

@Component({
  selector: 'app-product-preview',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './product-preview.component.html',
  styleUrl: './product-preview.component.scss'
})
export class ProductPreviewComponent {
  @Input() product: Product | null = null;
}
