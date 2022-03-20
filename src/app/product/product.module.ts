import { NgModule } from '@angular/core'
import { TuiAvatarModule } from '@taiga-ui/kit'
import { CoreModule } from '../core/core.module'
import { ProductDetailsComponent } from './product-details/product-details.component'
import { ProductRoutingModule } from './product-routing.module'
import { ProductDetailsCarbonHistoryComponent } from './product-details/product-details-carbon-history/product-details-carbon-history.component'
import { ProductDetailsCarbonFootprintIndicatorComponent } from './product-details/product-details-carbon-footprint-indicator/product-details-carbon-footprint-indicator.component';
import { ProductDetailsCarbonScoreComponent } from './product-details/product-details-carbon-score/product-details-carbon-score.component'

@NgModule({
  declarations: [
    ProductDetailsComponent,
    ProductDetailsCarbonHistoryComponent,
    ProductDetailsCarbonFootprintIndicatorComponent,
    ProductDetailsCarbonScoreComponent,
  ],
  imports: [CoreModule, ProductRoutingModule, TuiAvatarModule],
  exports: [],
})
export class ProductModule {}
