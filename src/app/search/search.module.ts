import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { SearchAreaComponent } from './search-area/search-area.component'
import { ReactiveFormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router'
import { TuiButtonModule } from '@taiga-ui/core'
import { TuiInputModule, TuiIslandModule } from '@taiga-ui/kit'
import { CoreModule } from '../core/core.module'
import { SearchBarComponent } from './search-bar/search-bar.component'
import { SearchResultsComponent } from './search-results/search-results.component';
import { SearchResultCardComponent } from './search-results/search-result-card/search-result-card.component'

@NgModule({
  declarations: [SearchAreaComponent, SearchBarComponent, SearchResultsComponent, SearchResultCardComponent],
  imports: [
    CommonModule,
    CoreModule,
    TuiInputModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      { path: '', component: SearchAreaComponent },
      { path: 'search/:searchQuery', component: SearchResultsComponent },
    ]),
    TuiButtonModule,
    TuiIslandModule,
  ],
})
export class SearchModule {}
