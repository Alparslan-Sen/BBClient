import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';
import { WeatherComponent } from './weather/weather.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'weather', component: WeatherComponent, canActivate: [AuthGuard] },
  // { path: 'weather', component: WeatherComponent },
  { path: 'user-profile', component: UserProfileComponent },

];

@NgModule({
  imports: [
  // RouterModule.forRoot(routes,{ enableTracing: true })],
  RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
