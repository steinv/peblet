import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact/contact.component';
import { RouterModule, Routes } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TranslocoModule } from '@ngneat/transloco';

const routes: Routes = [
  { path: '', component: ContactComponent },
]

@NgModule({
  declarations: [
    ContactComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    TranslocoModule,
    RouterModule.forChild(routes),
  ]
})
export default class ContactModule { }
