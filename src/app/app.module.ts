import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageRouteComponent } from './components/landing-page-route/landing-page-route.component';
import { DashboardRouteComponent } from './components/dashboard-route/dashboard-route.component';
import { NavbarComponent } from './components/landing-page-route/components/navbar/navbar.component';
import { HeroComponent } from './components/landing-page-route/components/hero/hero.component';
import { NgxBootstrapIconsModule, allIcons } from 'ngx-bootstrap-icons';
import { GetdesktopComponent } from './components/landing-page-route/components/getdesktop/getdesktop.component';
import { AboutComponent } from './components/landing-page-route/components/about/about.component';
import { GetappComponent } from './components/landing-page-route/components/getapp/getapp.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageRouteComponent,
    DashboardRouteComponent,
    NavbarComponent,
    HeroComponent,
    GetdesktopComponent,
    AboutComponent,
    GetappComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxBootstrapIconsModule.pick(allIcons),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
