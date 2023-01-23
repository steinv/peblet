import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExperienceComponent } from './experience/experience.component';
import { RouterModule, Routes } from '@angular/router';
import { TranslocoModule, TRANSLOCO_SCOPE } from '@ngneat/transloco';

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
  ],
  providers: [
    { provide: TRANSLOCO_SCOPE, useValue: 'experience' },
  ]
})
export default class ExperienceModule { }
