import { NgModule } from '@angular/core'
import { TuiAvatarModule } from '@taiga-ui/kit'
import { CoreModule } from '../core/core.module'
import { ProductDetailsComponent } from './product-details/product-details.component'
import { ProductRoutingModule } from './product-routing.module'

@NgModule({
  declarations: [ProductDetailsComponent],
  imports: [CoreModule, ProductRoutingModule, TuiAvatarModule],
  exports: [],
})
export class ProductModule {}
