import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Feature2Component } from './feature2.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: Feature2Component,
    pathMatch: 'full',
  },
];

@NgModule({
  declarations: [Feature2Component],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class Feature2Module {}
