import { Component, Input } from '@angular/core'
import { Product } from '../../types/product.interface'

@Component({
  selector: 'app-product-details-carbon-score',
  templateUrl: './product-details-carbon-score.component.html',
  styleUrls: ['./product-details-carbon-score.component.scss'],
})
export class ProductDetailsCarbonScoreComponent {
  @Input() product: Product
}
