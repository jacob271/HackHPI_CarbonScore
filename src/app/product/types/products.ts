import {ProductCategory} from './category.enum'
import {ProductScore} from './product-score.enum'
import {Product} from './product.interface'

export const products: Product[] = [
  {
    id: 1,
    category: ProductCategory.Cookies,
    name: 'Cookie',
    imageUrl: 'https://www.onlinesolutionsgroup.de/wp-content/uploads/Cookies.jpg',
    score: ProductScore.B,
    companyName: 'Cookie Corp.',
  },
  {
    id: 2,
    category: ProductCategory.Clothing,
    name: 'Jacket "Future"',
    imageUrl: 'https://ae01.alicdn.com/kf/HTB1T5gYbiHrK1Rjy0Flq6AsaFXat/High-Quality-2019-Winter-Jacket-Men-Hooded-Windbreaker-and-Waterproof-Thick-Warm-Parka-Coat-Men-Casual.jpg',
    score: ProductScore.C,
    companyName: 'H&M'
  },
  {
    id: 3,
    category: ProductCategory.Clothing,
    name: 'Jacket "Eco"',
    imageUrl: 'https://tse2.mm.bing.net/th?id=OIP.lAUExyxT6_Ia05xj-gJ36wHaKa&pid=Api',
    score: ProductScore.B,
    companyName: 'Marc O\'Polo'
  },
  {
    id: 4,
    category: ProductCategory.Clothing,
    name: 'Recycled Jacket',
    imageUrl: 'https://tse3.mm.bing.net/th?id=OIP.gQqWX7kR_2DFtehjj_x3RAHaLH&pid=Api',
    score: ProductScore.A,
    companyName: 'MJ Wear'
  },
  {
    id: 5,
    category: ProductCategory.Bicycle,
    name: 'Bamboo Bike',
    imageUrl: 'https://tse3.mm.bing.net/th?id=OIP.6VuUNbKR5rWvqAd-O7ZcZQHaGF&pid=Api',
    score: ProductScore.B,
    companyName: 'My Boo'
  },
  {
    id: 6,
    category: ProductCategory.Bicycle,
    name: 'Racing Bike',
    imageUrl: 'https://tse4.mm.bing.net/th?id=OIP.jm2WbSXNz1DO2C4RY-dcogHaEr&pid=Api',
    score: ProductScore.C,
    companyName: 'Adamant'
  }
]
