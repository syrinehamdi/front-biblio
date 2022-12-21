import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './backoffice/forms/login/login.component';
import { RegisterComponent } from './backoffice/forms/register/register.component';
import { HomeComponent } from './frontoffice/home/home.component';
import { DashboardComponent } from './backoffice/dashboard/dashboard.component';
import { ProfileComponent } from './backoffice/profile/profile.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent, title: 'Login - Library Esen' },
  // backoffice
  {
    path: 'admin',
    component: DashboardComponent,
    title : 'Dashboard',
    children: [
      {
        path: 'register',
        component: RegisterComponent,
        title: 'Register - Library Esen',
      },
      { path:"profile", component: ProfileComponent, title: 'Profile_User'}
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
