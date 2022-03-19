import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { map, Observable } from 'rxjs'
import { products } from 'src/app/product/types/products'

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent {
  readonly query$: Observable<string> = this.route.paramMap.pipe(map((paramMap) => paramMap.get('searchQuery')))

  readonly searchResults = products

  constructor(private readonly route: ActivatedRoute) {}
}
