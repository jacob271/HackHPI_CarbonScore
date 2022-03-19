import { Product } from './product.interface'

export type SearchResult = Pick<Product, 'id' | 'name' | 'imageUrl' | 'category'>
