import { Component, Input, OnInit } from '@angular/core'
import { Product } from '../../types/product.interface'

@Component({
  selector: 'app-product-details-carbon-footprint-indicator',
  templateUrl: './product-details-carbon-footprint-indicator.component.html',
  styleUrls: ['./product-details-carbon-footprint-indicator.component.scss'],
})
export class ProductDetailsCarbonFootprintIndicatorComponent {
  @Input() product: Product
}
