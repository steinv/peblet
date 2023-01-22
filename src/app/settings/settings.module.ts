import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsComponent } from './settings/settings.component';
import { RouterModule, Routes } from '@angular/router';
import { TranslocoModule } from '@ngneat/transloco';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: SettingsComponent },
]

@NgModule({
  declarations: [
    SettingsComponent
  ],
  imports: [
    CommonModule,
    TranslocoModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ]
})
export default class SettingsModule { }
