import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        pathMatch: 'full'
    },
    // Future routes
    {
        path: 'services',
        loadComponent: () => import('./pages/services/services.component').then(m => m.ServicesComponent)
    },
    {
        path: 'services/corporate',
        loadComponent: () => import('./pages/services/corporate/corporate.component').then(m => m.CorporateComponent)
    },
    {
        path: 'services/branding',
        loadComponent: () => import('./pages/services/branding/branding.component').then(m => m.BrandingComponent)
    },
    {
        path: 'services/influence',
        loadComponent: () => import('./pages/services/influence/influence.component').then(m => m.InfluenceComponent)
    },
    {
        path: 'services/digital',
        loadComponent: () => import('./pages/services/digital/digital.component').then(m => m.DigitalComponent)
    },
    {
        path: 'services/events',
        loadComponent: () => import('./pages/services/events/events.component').then(m => m.EventsComponent)
    },
    {
        path: 'services/workspace',
        loadComponent: () => import('./pages/services/workspace/workspace.component').then(m => m.WorkspaceComponent)
    },
    {
        path: 'portfolio',
        loadComponent: () => import('./pages/portfolio/portfolio.component').then(m => m.PortfolioComponent)
    },
    {
        path: 'about',
        loadComponent: () => import('./pages/about/about.component').then(m => m.AboutComponent)
    },
    {
        path: 'team',
        loadComponent: () => import('./pages/team/team.component').then(m => m.TeamComponent)
    },
    {
        path: '**',
        redirectTo: ''
    }
];

