import { Routes } from "@angular/router";
import { TabsPage } from "./tabs.page";

export const routes: Routes = [
    {
        path: '',
        component: TabsPage,
        children: [
            {
              path: 'home',
              loadComponent: () => import('./home/home.page').then( m => m.HomePage)
            },
            {
              path: 'search',
              loadComponent: () => import('./search/search.page').then( m => m.SearchPage)
            },
            {
              path: 'serie',
              loadComponent: () => import('./serie/orders.page').then( m => m.OrdersPage)
            },
            {
              path: 'new',
              loadComponent: () => import('./new/wallet.page').then( m => m.WalletPage)
            },
            {
              path: 'menu',
              loadComponent: () => import('./menu/menu.page').then( m => m.MenuPage)
            },
            {
              path: '',
              redirectTo: '/tabs/home',
              pathMatch: 'full',
            },
        ]
    },
    {
      path: '',
      redirectTo: '/tabs/home',
      pathMatch: 'full',
    },
];