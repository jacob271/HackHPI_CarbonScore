import { Component, Input, OnInit } from '@angular/core'
import * as d3 from 'd3'

@Component({
  selector: 'app-product-details-ingredients-history',
  templateUrl: './product-details-ingredients-history.component.html',
  styleUrls: ['./product-details-ingredients-history.component.scss'],
})
export class ProductDetailsIngredientsHistoryComponent {
  readonly sumStats = [
    [
      { month: '1', min: 0.6, max: 1.0 },
      { month: '2', min: 0.6, max: 1.0 },
      { month: '3', min: 0.5, max: 0.9 },
      { month: '4', min: 0.5, max: 0.9 },
      { month: '5', min: 0.5, max: 1.0 },
      { month: '6', min: 0.4, max: 0.9 },
      { month: '7', min: 0.5, max: 1.0 },
      { month: '8', min: 0.5, max: 0.9 },
      { month: '9', min: 0.5, max: 1.0 },
      { month: '10', min: 0.5, max: 0.9 },
      { month: '11', min: 0.5, max: 0.9 },
      { month: '12', min: 0.6, max: 0.9 },
    ],
    [
      { month: '1', min: 3, max: 10 },
      { month: '2', min: 5, max: 13 },
      { month: '3', min: 5, max: 14 },
      { month: '4', min: 5, max: 15 },
      { month: '5', min: 6, max: 13 },
      { month: '6', min: 7, max: 14 },
      { month: '7', min: 7, max: 15 },
      { month: '8', min: 6, max: 15 },
      { month: '9', min: 6, max: 14 },
      { month: '10', min: 7, max: 13 },
      { month: '11', min: 7, max: 13 },
      { month: '12', min: 8, max: 12 },
    ],
    [
      { month: '1', min: 10, max: 14 },
      { month: '2', min: 10, max: 14 },
      { month: '3', min: 11, max: 16 },
      { month: '4', min: 9, max: 15 },
      { month: '5', min: 8, max: 14 },
      { month: '6', min: 9, max: 15 },
      { month: '7', min: 10, max: 15 },
      { month: '8', min: 7, max: 13 },
      { month: '9', min: 7, max: 14 },
      { month: '10', min: 6, max: 13 },
      { month: '11', min: 7, max: 12 },
      { month: '12', min: 8, max: 15 },
    ],
  ]
}
