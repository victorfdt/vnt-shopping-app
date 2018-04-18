import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { APP_ROUTE } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingListItemComponent } from './shopping-list/shopping-list-item/shopping-list-item.component';
import { ShoppingListService } from './shopping-list.service';
import { RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AuthService } from './auth.service';

import { HttpClientModule} from '@angular/common/http';
import { environment } from '../environments/environment';

//Firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { ShoppingStoreComponent } from './shopping-list/shopping-store/shopping-store.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingListComponent,
    ShoppingListItemComponent,
    AboutComponent,
    ShoppingStoreComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    RouterModule.forRoot(APP_ROUTE),
    AngularFontAwesomeModule
  ],
  providers: [
    AuthService,
    ShoppingListService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
