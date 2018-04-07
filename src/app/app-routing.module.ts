import { Routes } from '@angular/router';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { AboutComponent } from './about/about.component';
import { AuthService } from './auth.service';

export const APP_ROUTE: Routes = [
    { path: 'about', component: AboutComponent, canActivate: [AuthService] },
    { path: 'shopping-list', component: ShoppingListComponent, canActivate: [AuthService] },
    { path: '', redirectTo: 'shopping-list', pathMatch: 'full' },
    { path: '**', component: ShoppingListComponent }
];