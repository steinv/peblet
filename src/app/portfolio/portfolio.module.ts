import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { RouterModule, Routes } from '@angular/router';
import { PortfolioListItemComponent } from './portfolio-list-item/portfolio-list-item.component';

const routes: Routes = [
  { path: '', component: PortfolioComponent },
  { path: ':project', component: PortfolioComponent },
]

@NgModule({
  declarations: [
    PortfolioComponent,
    PortfolioListItemComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class PortfolioModule { }
