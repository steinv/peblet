import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { DatePipe } from '@angular/common';
import { provideHttpClient, withInterceptorsFromDi, withXhr } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { provideTranslocoPersistLang, GetLangParams } from '@jsverse/transloco-persist-lang';
import { AppRoutingModule } from './app-routing.module';
import { AppWidgetComponent } from './app-widget/app-widget.component';
import { AppComponent } from './app.component';
import { HomeScreenComponent } from './home-screen/home-screen.component';
import { NavigationComponent } from './navigation/navigation.component';
import { StatusBarComponent } from './status-bar/status-bar.component';
import { TabsOverviewComponent } from './tabs-overview/tabs-overview.component';
import { TranslocoRootModule } from './transloco-root.module';

@NgModule({
    declarations: [
        AppComponent,
        HomeScreenComponent,
        AppWidgetComponent,
        NavigationComponent,
        StatusBarComponent,
        TabsOverviewComponent,
    ],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FontAwesomeModule,
        TranslocoRootModule,
    ],
    providers: [
        DatePipe,
        provideHttpClient(withXhr(), withInterceptorsFromDi()),
        provideTranslocoPersistLang({
            getLangFn: ({ cachedLang, browserLang, defaultLang }: GetLangParams) => cachedLang || browserLang || defaultLang,
            storage: { useValue: localStorage },
        })
    ]
})
export class AppModule { }
