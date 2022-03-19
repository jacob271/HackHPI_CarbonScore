import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { map, Observable } from 'rxjs'
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

  constructor(private readonly route: ActivatedRoute) {}
}
