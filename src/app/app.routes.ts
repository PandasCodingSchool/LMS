import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CataloguesComponent } from './components/catalogues/catalogues.component';

export const routes: Routes = [
    {
        path: '',
        component: LoginComponent
    },
    {
        path:'dashboard',
        component:DashboardComponent,
        children:[
           {
            path:'catalogues',
            component: CataloguesComponent
           }
        ]
    }
];
