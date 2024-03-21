import { Routes } from '@angular/router';
import { HomeComponent } from './pages/dashboard/home/home.component';
import { ShoppingCartComponent } from './pages/cart/shopping-cart/shopping-cart.component';
import { WishListComponent } from '../app/pages/wish-list/wish-list.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '', loadChildren: () => import('../app/pages/dashboard/dashboard.module').then(m => m.DashboardModule) },
    { path: "home", component: HomeComponent },
    { path: "account", loadChildren: () => import('../app/pages/account/account.module').then(m => m.AccountModule)},
    { path: "shopping-cart",loadComponent:()=> import('../app/pages/cart/shopping-cart/shopping-cart.component').then(m=>m.ShoppingCartComponent)},
    { path: "wish-list",loadComponent:()=> import('../app/pages/wish-list/wish-list.component').then(m=>m.WishListComponent)},
    { path: "product-detail",loadComponent:()=> import('../app/pages/product-detail/product-detail.component').then(m=>m.ProductDetailComponent)},
    { path: 'login',loadComponent: () => import('../app/pages/account/login/login.component').then(C=> C.LoginComponent )},
    { path: 'shop',loadComponent: () => import('../app/pages/dashboard/shop/shop.component').then(C=> C.ShopComponent )},
    { path: 'comparison',loadComponent: () => import('../app/pages/comparison/comparison.component').then(C=> C.ComparisonComponent )},
    { path: 'checkout',loadComponent: () => import('../app/pages/checkout/checkout.component').then(C=> C.CheckoutComponent )},
    { path: 'success',loadComponent: () => import('../app/pages/order-success/order-success.component').then(C=> C.OrderSuccessComponent )},
];