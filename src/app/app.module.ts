// modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../app/material.module';
import { AppRoutingModule } from './routing/app-routing.module';
import { MatPaginatorModule} from '@angular/material/paginator';
import { MatTableModule} from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
// components
import { AppComponent } from './app.component';
import { LoginComponent } from './screens/login/login.component';
import { AdminViewComponent } from './screens/admin-view/admin-view.component';
import { PageNotFoundComponent } from './screens/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminViewComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule, MaterialModule, BrowserAnimationsModule,
    MatTableModule, MatPaginatorModule,MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
