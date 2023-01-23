import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact/contact.component';
import { RouterModule, Routes } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TranslocoModule, TRANSLOCO_SCOPE } from '@ngneat/transloco';

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
  ],
  providers: [
    { provide: TRANSLOCO_SCOPE, useValue: 'contact' },
  ]
})
export default class ContactModule { }
