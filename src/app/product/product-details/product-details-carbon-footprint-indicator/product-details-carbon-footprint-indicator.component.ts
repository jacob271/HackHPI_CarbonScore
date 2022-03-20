import { Component, Input, OnInit } from '@angular/core'
import { Observable } from 'rxjs'
import { ViewTypeService } from 'src/app/view-type.service'
import { Product } from '../../types/product.interface'

@Component({
  selector: 'app-product-details-carbon-footprint-indicator',
  templateUrl: './product-details-carbon-footprint-indicator.component.html',
  styleUrls: ['./product-details-carbon-footprint-indicator.component.scss'],
})
export class ProductDetailsCarbonFootprintIndicatorComponent {
  @Input() product: Product

  readonly isBusinessView$: Observable<boolean> = this.viewType.isBusinessView$

  constructor(private readonly viewType: ViewTypeService) {}
}
