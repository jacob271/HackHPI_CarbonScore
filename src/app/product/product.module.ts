import { NgModule } from '@angular/core'
import { TuiAvatarModule } from '@taiga-ui/kit'
import { CoreModule } from '../core/core.module'
import { ProductDetailsComponent } from './product-details/product-details.component'
import { ProductRoutingModule } from './product-routing.module'
import { ProductDetailsCarbonHistoryComponent } from './product-details/product-details-carbon-history/product-details-carbon-history.component'
import { ProductDetailsCarbonFootprintIndicatorComponent } from './product-details/product-details-carbon-footprint-indicator/product-details-carbon-footprint-indicator.component'
import { ProductDetailsCarbonScoreComponent } from './product-details/product-details-carbon-score/product-details-carbon-score.component'
import { ProductDetailsIngredientsComponent } from './product-details/product-details-ingredients/product-details-ingredients.component'
import { ProductDetailsIngredientsHistoryComponent } from './product-details/product-details-ingredients-history/product-details-ingredients-history.component'
import { TuiNotificationModule, TuiSvgModule } from '@taiga-ui/core';
import { ProductDetailsRecommendationsComponent } from './product-details/product-details-recommendations/product-details-recommendations.component'

@NgModule({
  declarations: [
    ProductDetailsComponent,
    ProductDetailsCarbonHistoryComponent,
    ProductDetailsCarbonFootprintIndicatorComponent,
    ProductDetailsCarbonScoreComponent,
    ProductDetailsIngredientsComponent,
    ProductDetailsIngredientsHistoryComponent,
    ProductDetailsRecommendationsComponent,
  ],
  imports: [CoreModule, ProductRoutingModule, TuiAvatarModule, TuiSvgModule, TuiNotificationModule],
  exports: [],
})
export class ProductModule {}
