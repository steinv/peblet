import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeScreenComponent } from './home-screen/home-screen.component';

const routes: Routes = [
  { path: '', component: HomeScreenComponent },
  /*
  { path: 'contact', loadChildren: () => import('./contact/contact.module') },
  { path: 'portfolio', loadChildren: () => import('./portfolio/portfolio.module') },
  { path: 'experience', loadChildren: () => import('./experience/experience.module') },
  { path: 'settings', loadChildren: () => import('./settings/settings.module') },
  */
  { path: '**', component: HomeScreenComponent }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
