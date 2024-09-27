import { NgModule } from '@angular/core';
import { RedirectCommand, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DriverComponent } from './driver/driver.component';
import { errorContext } from 'rxjs/internal/util/errorContext';
import { ErrorPageComponent } from './error-page/error-page.component';

const routes: Routes = [
  {path:"home", component:HomeComponent},
  {path:"drivers",component:DriverComponent},
  {path:"",redirectTo:"home", pathMatch:"full"},
  {path:"**",component:ErrorPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
