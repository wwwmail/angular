import { ProductSectionComponent } from './components/product-section/product-section.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { CartPageComponent } from './components/cart-page/cart-page.component';
import { PostsComponent } from './components/posts/posts.component';
const routes: Routes = [
  {path: '', component: HomePageComponent, children: [
    {path: 'post/:id', component: ProductSectionComponent}
  ]},
  {path: 'post', component: CartPageComponent},
  {path: 'posts', component: PostsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
