import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        pathMatch: 'full'
    },
    // Future routes
    // { path: 'services', loadChildren: () => import('./pages/services/services.routes').then(m => m.SERVICES_ROUTES) },
    // { path: 'portfolio', loadChildren: () => import('./pages/portfolio/portfolio.routes').then(m => m.PORTFOLIO_ROUTES) },
    // { path: 'about', loadChildren: () => import('./pages/about/about.routes').then(m => m.ABOUT_ROUTES) },
    // { path: 'team', loadChildren: () => import('./pages/team/team.routes').then(m => m.TEAM_ROUTES) },
    // { path: 'contact', loadChildren: () => import('./pages/contact/contact.routes').then(m => m.CONTACT_ROUTES) },
    {
        path: '**',
        redirectTo: ''
    }
];

