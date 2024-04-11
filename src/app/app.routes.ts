import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CataloguesComponent } from './components/catalogues/catalogues.component';
import { membersComponent } from './components/members/members.component';
import { CirculationComponent } from './components/circulation/circulation/circulation.component';

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
            path:'',
            component: CataloguesComponent
           },
           {
            path:'catalogues',
            component: CataloguesComponent
           },
           {
            path: 'members',
            component: membersComponent
           },
           {
            path:'circulations',
            component:CirculationComponent
           }
        ]
    }
];
