import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExperienceComponent } from './experience/experience.component';
import { RouterModule, Routes } from '@angular/router';
import { TranslocoModule } from '@ngneat/transloco';

const routes: Routes = [
  { path: '', component: ExperienceComponent },
]

@NgModule({
  declarations: [
    ExperienceComponent
  ],
  imports: [
    CommonModule,
    TranslocoModule,
    RouterModule.forChild(routes),
  ]
})
export default class ExperienceModule { }
