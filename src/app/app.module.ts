import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { DatePipe } from '@angular/common';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TranslocoPersistLangModule, TRANSLOCO_PERSIST_LANG_STORAGE } from '@ngneat/transloco-persist-lang';
import { AppRoutingModule } from './app-routing.module';
import { AppWidgetComponent } from './app-widget/app-widget.component';
import { AppComponent } from './app.component';
import { HomeScreenComponent } from './home-screen/home-screen.component';
import { NavigationComponent } from './navigation/navigation.component';
import { StatusBarComponent } from './status-bar/status-bar.component';
import { TranslocoRootModule } from './transloco-root.module';

@NgModule({
    declarations: [
        AppComponent,
        HomeScreenComponent,
        AppWidgetComponent,
        NavigationComponent,
        StatusBarComponent,
    ],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FontAwesomeModule,
        TranslocoRootModule,
        TranslocoPersistLangModule.forRoot({
            getLangFn: ({ cachedLang, browserLang, defaultLang }) => cachedLang || browserLang || defaultLang,
            storage: {
                provide: TRANSLOCO_PERSIST_LANG_STORAGE,
                useValue: localStorage,
            },
        })
    ], 
    providers: [
        DatePipe, 
        provideHttpClient(withInterceptorsFromDi())
    ]
})
export class AppModule { }
