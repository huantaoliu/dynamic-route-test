import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Feature1Component } from './feature1.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: Feature1Component,
    pathMatch: 'full',
  },
];

@NgModule({
  declarations: [Feature1Component],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class Feature1Module {}
