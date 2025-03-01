import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'tdf',
    loadComponent: () => import('../../components/forms/tdf-form/tdf-form.component').then(m => m.TdfFormComponent),
    title: 'Template Driven Form'
  },
  {
    path: 'rdf',
    loadComponent: () => import('../../components/forms/rdf/rdf.component').then(m => m.RdfComponent),
    title: 'Reactive Form'
  },
  {
    path: '',
    redirectTo: 'tdf',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormsModule {}
