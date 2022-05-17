import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },

  {
    path: 'feature1',
    loadChildren: () =>
      import('./feature1/feature1.module').then((m) => m.Feature1Module),
  },
  {
    path: 'feature2',
    loadChildren: () =>
      import('./feature2/feature2.module').then((m) => m.Feature2Module),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
