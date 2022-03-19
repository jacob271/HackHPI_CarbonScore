import { ProductCategory } from './category.enum'
import { ProductScore } from './product-score.enum'

export interface Product {
  id: number
  imageUrl: string
  name: string
  category: ProductCategory
  score: ProductScore
  companyName: string
}
