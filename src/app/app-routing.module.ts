import { NgModule }  from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { ViewComponent } from './create-post/view/view.component';
import { CategorizationViewComponent } from './categorization/categorization-view/categorization-view.component';
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path:'createpost', component: CreatePostComponent },
  { path:'view/:id', component: ViewComponent },
  { path: 'categorization' , component: CategorizationViewComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}