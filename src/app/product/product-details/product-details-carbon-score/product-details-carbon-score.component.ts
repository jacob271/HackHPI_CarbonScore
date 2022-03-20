import { Component, Input } from '@angular/core'
import { Product } from '../../types/product.interface'

@Component({
  selector: 'app-product-details-carbon-score',
  templateUrl: './product-details-carbon-score.component.html',
  styleUrls: ['./product-details-carbon-score.component.scss'],
})
export class ProductDetailsCarbonScoreComponent {
  @Input() product: Product

  isDropdownOpen = false

  onClick() {
    this.isDropdownOpen = !this.isDropdownOpen
  }

  onActiveZone(active: unknown) {
    this.isDropdownOpen = typeof active === 'boolean' && active && this.isDropdownOpen
  }

  onObscured(isObscured: unknown): void {
    if (isObscured) {
      this.isDropdownOpen = false
    }
  }
}
