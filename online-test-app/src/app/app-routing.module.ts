import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {QuizComponent} from './quiz/quiz.component'
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {path:"\quiz", component:QuizComponent},
  {path:"\login", component:LoginComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



