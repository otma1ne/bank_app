import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageRouteComponent } from './components/landing-page-route/landing-page-route.component';
import { SiginRouteComponent } from './components/landing-page-route/components/sigin-route/sigin-route.component';
import { HomeRouteComponent } from './components/landing-page-route/components/home-route/home-route.component';
import { DashboardRouteComponent } from './components/dashboard-route/dashboard-route.component';
import { DashboardComponent } from './components/dashboard-route/components/dashboard/dashboard.component';
import { CustomersComponent } from './components/dashboard-route/components/customers/customers.component';
import { CustomerDetailsComponent } from './components/dashboard-route/components/customer-details/customer-details.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    component: LandingPageRouteComponent,
    children: [
      {
        path: '',
        component: HomeRouteComponent,
      },
      {
        path: 'signin',
        component: SiginRouteComponent,
      },
    ],
  },
  {
    path: 'dashboard',
    component: DashboardRouteComponent,
    children: [
      {
        path: '',
        component: DashboardComponent,
      },
      {
        path: 'customers',
        component: CustomersComponent,
      },
      {
        path: 'customers/:id',
        component: CustomerDetailsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
