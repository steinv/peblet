import { isDevMode, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { DatePipe } from '@angular/common';
import { provideHttpClient, withInterceptorsFromDi, withXhr } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { GetLangParams, provideTranslocoPersistLang } from '@jsverse/transloco-persist-lang';
import { provideTransloco, TranslocoModule } from '@jsverse/transloco';
import { AppRoutingModule } from './app-routing.module';
import { AppWidgetComponent } from './app-widget/app-widget.component';
import { AppComponent } from './app.component';
import { HomeScreenComponent } from './home-screen/home-screen.component';
import { NavigationComponent } from './navigation/navigation.component';
import { StatusBarComponent } from './status-bar/status-bar.component';
import { TabsOverviewComponent } from './tabs-overview/tabs-overview.component';
import { TranslocoHttpLoader } from './transloco-http-loader';

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
        TranslocoModule,
    ],
    providers: [
        DatePipe,
        provideHttpClient(withXhr(), withInterceptorsFromDi()),
        provideTransloco({
            config: {
                availableLangs: ['en', 'nl', 'fr'],
                defaultLang: 'en',
                fallbackLang: 'en',
                reRenderOnLangChange: true,
                prodMode: !isDevMode(),
            },
            loader: TranslocoHttpLoader,
        }),
        provideTranslocoPersistLang({
            getLangFn: ({ cachedLang, browserLang, defaultLang }: GetLangParams) => cachedLang || browserLang || defaultLang,
            storage: { useValue: localStorage },
        })
    ]
})
export class AppModule { }
