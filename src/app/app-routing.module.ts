import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component'
import { SpaRequestComponent} from './spa-request/spa-request.component'


const routes: Routes = [

  {

    path: '',
    component: LoginPageComponent
    

  },
 
  {path:'spa',
  component: SpaRequestComponent

  },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
