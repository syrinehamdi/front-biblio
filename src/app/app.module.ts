import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './frontoffice/components/navbar/navbar.component';
import { HomeComponent } from './frontoffice/home/home.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MaterielsModule } from './materiels/materiels.module';
import { ModalComponent } from './frontoffice/components/modal/modal.component';
import { LoginComponent } from './backoffice/forms/login/login.component';
import { RegisterComponent } from './backoffice/forms/register/register.component';
import { NavsidebarComponent } from './backoffice/components/navsidebar/navsidebar.component';
import { DashboardComponent } from './backoffice/dashboard/dashboard.component';
import { ProfileComponent } from './backoffice/profile/profile.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ModalComponent,
    LoginComponent,
    RegisterComponent,
    NavsidebarComponent,
    DashboardComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    MaterielsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
