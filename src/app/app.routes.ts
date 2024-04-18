import { Router, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { OrdersPageComponent } from './pages/orders-page/orders-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { SettingsPageComponent } from './pages/settings-page/settings-page.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { CreateOrderPageComponent } from './pages/create-order-page/create-order-page.component';
import { inject } from '@angular/core';
import { AuthRepository } from './store/auth.repository';

export const authGuard = async () => {
    const authService = inject(AuthRepository);
    const router = inject(Router);
    const auth = await authService.isAuth();
    if (auth) {
      return true
    }
    return router.parseUrl('/login');
  };
  

export const routes: Routes = [
    {
        path: 'main', component: MainPageComponent,
        children: [
            { path: 'home', component: HomePageComponent },
            { path: 'orders', component: OrdersPageComponent },
            { path: 'profile', component: ProfilePageComponent },
            { path: 'settings', component: SettingsPageComponent }
        ]
    },
    { path: 'login', component: LoginPageComponent },
    { path: 'create-order', component: CreateOrderPageComponent, canActivate: [authGuard] },
];


