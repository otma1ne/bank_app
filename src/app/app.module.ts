import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageRouteComponent } from './components/landing-page-route/landing-page-route.component';
import { DashboardRouteComponent } from './components/dashboard-route/dashboard-route.component';
import { NavbarComponent } from './components/landing-page-route/components/navbar/navbar.component';
import { HeroComponent } from './components/landing-page-route/components/home-route/components/hero/hero.component';
import { NgxBootstrapIconsModule, allIcons } from 'ngx-bootstrap-icons';
import { GetdesktopComponent } from './components/landing-page-route/components/home-route/components/getdesktop/getdesktop.component';
import { AboutComponent } from './components/landing-page-route/components/home-route/components/about/about.component';
import { GetappComponent } from './components/landing-page-route/components/home-route/components/getapp/getapp.component';
import { FooterComponent } from './components/landing-page-route/components/home-route/components/footer/footer.component';
import { SiginRouteComponent } from './components/landing-page-route/components/sigin-route/sigin-route.component';
import { HomeRouteComponent } from './components/landing-page-route/components/home-route/home-route.component';
import { SidebarComponent } from './components/dashboard-route/components/sidebar/sidebar.component';
import { DashboardComponent } from './components/dashboard-route/components/dashboard/dashboard.component';
import { CustomersComponent } from './components/dashboard-route/components/customers/customers.component';
import { NavbarDashComponent } from './components/dashboard-route/components/navbar-dash/navbar-dash.component';
import { HttpClientModule } from '@angular/common/http';
import { CustomerDetailsComponent } from './components/dashboard-route/components/customer-details/customer-details.component';
import { CreateCustomerComponent } from './components/dashboard-route/components/create-customer/create-customer.component';
import { ConfirmComponent } from './components/dashboard-route/components/customers/components/confirm/confirm.component';
import { UpdateCostumerComponent } from './components/dashboard-route/components/update-costumer/update-costumer.component';

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
    FooterComponent,
    SiginRouteComponent,
    HomeRouteComponent,
    SidebarComponent,
    DashboardComponent,
    CustomersComponent,
    NavbarDashComponent,
    CustomerDetailsComponent,
    CreateCustomerComponent,
    ConfirmComponent,
    UpdateCostumerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxBootstrapIconsModule.pick(allIcons),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
