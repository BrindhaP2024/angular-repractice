import { Routes } from '@angular/router';
import { RxjsCreationComponent } from './components/app-rxjs-creation/app-rxjs-creation.component';

export const routes: Routes = [
  {
    path: 'rxjs-creation',
    component: RxjsCreationComponent,
    title: 'RxJS Creation',
    children: [
      {
        path: 'post-list',
        loadComponent: () => import('./components/post-list/post-list.component').then(m => m.PostListComponent),
        title: 'Post List'
      },
      {
        path: 'product',
        loadComponent: () => import('./components/product/product.component').then(m => m.ProductComponent),
        title: 'Product'
      },
      {
        path: 'sample-obs-subject',
        loadComponent: () => import('./components/sample-obs-subject/sample-obs-subject.component').then(m => m.SampleObsSubjectComponent),
        title: 'Sample Obs Subject'
      },
      {
        path: 'search',
        loadChildren: () => import('./modules/search/search.module').then(m => m.SearchModule),
        title: 'Search'
      },
      {
        path: '',
        redirectTo: 'post-list',
        pathMatch: 'full'
      }
    ]
  },
  { path: '**', redirectTo: 'rxjs-creation' }
];
