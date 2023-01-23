import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { RouterModule, Routes } from '@angular/router';
import { PortfolioListItemComponent } from './portfolio-list-item/portfolio-list-item.component';
import { PortfolioProjectComponent } from './portfolio-project/portfolio-project.component';
import { ProjecResolver } from './project.resolver';
import { TranslocoModule, TRANSLOCO_SCOPE } from '@ngneat/transloco';

const routes: Routes = [
  { path: '', component: PortfolioComponent },
  { path: ':project', component: PortfolioProjectComponent, resolve: {project: ProjecResolver}},
]

@NgModule({
  declarations: [
    PortfolioComponent,
    PortfolioListItemComponent,
    PortfolioProjectComponent
  ],
  imports: [
    CommonModule,
    TranslocoModule,
    RouterModule.forChild(routes),
  ],
  providers: [
    ProjecResolver,
    { provide: TRANSLOCO_SCOPE, useValue: 'portfolio' },
  ]
})
export default class PortfolioModule { }
