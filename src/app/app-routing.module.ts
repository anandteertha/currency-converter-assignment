import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponentComponent } from './login-component/login-component.component'
import { OperatorComponent } from "./operator/operator.component";
import { AddComponent } from "./add/add.component";

const routes: Routes = [
  {
    component:LoginComponentComponent,
    path: ''
  },
  {
    component:OperatorComponent,
    path: 'operator'
  },
  {
    component:OperatorComponent,
    path:'operator/:x'
  },
  {
    component: AddComponent,
    path: 'add'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
