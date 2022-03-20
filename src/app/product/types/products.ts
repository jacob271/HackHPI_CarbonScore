import {ProductCategory} from './category.enum'
import {ProductScore} from './product-score.enum'
import {Product} from './product.interface'

export const products: Product[] = [
  {
    id: 1,
    category: ProductCategory.Cookies,
    name: 'Cookie',
    imageUrl: 'https://www.onlinesolutionsgroup.de/wp-content/uploads/Cookies.jpg',
    score: ProductScore.A,
    companyName: 'Cookie Corp.',
  },
  {
    id: 2,
    category: ProductCategory.Clothing,
    name: 'Red Jacket',
    imageUrl: 'https://ae01.alicdn.com/kf/HTB1T5gYbiHrK1Rjy0Flq6AsaFXat/High-Quality-2019-Winter-Jacket-Men-Hooded-Windbreaker-and-Waterproof-Thick-Warm-Parka-Coat-Men-Casual.jpg',
    score: ProductScore.C,
    companyName: 'The ultimate jacket company'
  }
]
