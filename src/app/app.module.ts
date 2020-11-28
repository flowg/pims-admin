/**
 * Angular imports
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/**
 * App imports
 */
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardModule } from './modules/dashboard/dashboard.module';

@NgModule( {
    imports:      [
        BrowserModule,
        BrowserAnimationsModule,
        DashboardModule,
        AppRoutingModule
    ],
    declarations: [ AppComponent ],
    providers:    [],
    bootstrap:    [ AppComponent ]
} )
export class AppModule {
}
