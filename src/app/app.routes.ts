import { Routes } from '@angular/router';


export const routes: Routes = [
  {
    path: '',
    redirectTo: 'landing',
    pathMatch: 'full',
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },
    {
      path: 'details/:id',
      loadComponent: () => import('./details/details.page').then(m => m.DetailsPage)
    },
    {
      path: 'landing',
      loadComponent: () => import('./landing/landing.page').then(m => m.LandingPage)
    },
    {
      path: 'login',
      loadComponent: () => import('./login/login.page').then(m => m.LoginPage)
    },

];
