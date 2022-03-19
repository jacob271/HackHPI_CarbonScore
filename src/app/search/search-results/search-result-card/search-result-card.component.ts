import { Component, Input } from '@angular/core'
import { SearchResult } from 'src/app/product/types/search-result.interface'

@Component({
  selector: 'app-search-result-card',
  templateUrl: './search-result-card.component.html',
  styleUrls: ['./search-result-card.component.scss'],
})
export class SearchResultCardComponent {
  @Input() searchResult: SearchResult

  constructor() {}
}
