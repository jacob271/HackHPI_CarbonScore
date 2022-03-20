import { Component, HostBinding } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { map, Observable } from 'rxjs'
import { ViewTypeService } from 'src/app/view-type.service'
import { Product } from '../types/product.interface'
import { products } from '../types/products'

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent {
  readonly product$: Observable<Product> = this.route.paramMap.pipe(
    map((paramMap) => paramMap.get('id')),
    map((productId) => products.find((product) => product.id === +productId))
  )

  readonly isBusinessView$: Observable<boolean> = this.viewType.isBusinessView$

  @HostBinding('class') protected readonly hostClass = 'tui-container tui-space_bottom-3'

  constructor(private readonly route: ActivatedRoute, private readonly viewType: ViewTypeService) {}
}
