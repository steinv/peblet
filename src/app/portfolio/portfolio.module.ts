import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: PortfolioComponent },
]

@NgModule({
  declarations: [
    PortfolioComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class PortfolioModule { }
