import { NgModule } from '@angular/core'
import { TuiAccordionModule, TuiAvatarModule } from '@taiga-ui/kit'
import { CoreModule } from '../core/core.module'
import { ProductDetailsComponent } from './product-details/product-details.component'
import { ProductRoutingModule } from './product-routing.module'
import { ProductDetailsCarbonHistoryComponent } from './product-details/product-details-carbon-history/product-details-carbon-history.component'
import { ProductDetailsCarbonFootprintIndicatorComponent } from './product-details/product-details-carbon-footprint-indicator/product-details-carbon-footprint-indicator.component'
import { ProductDetailsCarbonScoreComponent } from './product-details/product-details-carbon-score/product-details-carbon-score.component'
import { ProductDetailsIngredientsComponent } from './product-details/product-details-ingredients/product-details-ingredients.component'
import { ProductDetailsIngredientsHistoryComponent } from './product-details/product-details-ingredients-history/product-details-ingredients-history.component'
import { TuiDropdownModule, TuiLinkModule, TuiNotificationModule, TuiSvgModule } from '@taiga-ui/core'
import { ProductDetailsRecommendationsComponent } from './product-details/product-details-recommendations/product-details-recommendations.component'
import { ProductDetailsIngredientHistoryChartComponent } from './product-details/product-details-ingredients-history/product-details-ingredient-history-chart/product-details-ingredient-history-chart.component'

@NgModule({
  declarations: [
    ProductDetailsComponent,
    ProductDetailsCarbonHistoryComponent,
    ProductDetailsCarbonFootprintIndicatorComponent,
    ProductDetailsCarbonScoreComponent,
    ProductDetailsIngredientsComponent,
    ProductDetailsIngredientsHistoryComponent,
    ProductDetailsRecommendationsComponent,
    ProductDetailsIngredientHistoryChartComponent,
  ],
  imports: [
    CoreModule,
    ProductRoutingModule,
    TuiAvatarModule,
    TuiSvgModule,
    TuiNotificationModule,
    TuiLinkModule,
    TuiDropdownModule,
    TuiAccordionModule,
  ],
  exports: [],
})
export class ProductModule {}
