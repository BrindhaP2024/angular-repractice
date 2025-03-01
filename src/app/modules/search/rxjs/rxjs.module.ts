import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RxjsCreationComponent } from '../../components/app-rxjs-creation/app-rxjs-creation.component';

const routes: Routes = [
  {
    path: '',
    component: RxjsCreationComponent,
    children: [
      {
        path: 'post-list',
        loadComponent: () => import('../../components/post-list/post-list.component')
          .then(m => m.PostListComponent),
        title: 'Post List'
      },
      {
        path: 'product',
        loadComponent: () => import('../../components/product/product.component')
          .then(m => m.ProductComponent),
        title: 'Product'
      },
      {
        path: '',
        redirectTo: 'post-list',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RxjsModule {}
