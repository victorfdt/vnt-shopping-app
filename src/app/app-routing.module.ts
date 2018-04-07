import { Routes } from '@angular/router';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { AboutComponent } from './about/about.component';

export const APP_ROUTE: Routes = [
    { path: 'about', component: AboutComponent },
    { path: 'shopping-list', component: ShoppingListComponent },
    { path: '', redirectTo: 'shopping-list', pathMatch: 'full' },
    { path: '**', component: ShoppingListComponent }
];