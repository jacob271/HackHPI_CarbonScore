import { ProductCategory } from './category.enum'
import { ProductScore } from './product-score.enum'
import { Product } from './product.interface'

export const products: Product[] = [
  {
    id: 1,
    category: ProductCategory.Cookies,
    name: 'Cookie',
    imageUrl: 'https://www.onlinesolutionsgroup.de/wp-content/uploads/Cookies.jpg',
    score: ProductScore.A,
    companyName: 'Cookie Corp.',
  },
]
