import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

const routes: Routes = [
  { path: 'products', loadChildren: () => import('./product/product.module').then((m) => m.ProductModule) },
  { path: '', loadChildren: () => import('./search/search.module').then((m) => m.SearchModule) },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
