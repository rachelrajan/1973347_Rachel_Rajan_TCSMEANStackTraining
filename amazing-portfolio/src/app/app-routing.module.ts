import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

//API hold all routing details
const routes: Routes = [
  {path:"\signup", component:SignupComponent},
  {path:"\login", component:LoginComponent},
  {path:"\portfolio", component:PortfolioComponent},
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
