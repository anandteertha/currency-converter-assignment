import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponentComponent } from './login-component/login-component.component'
import { OperatorComponent } from "./operator/operator.component";
import { AddComponent } from "./add/add.component";
import { ConsumerComponent } from "./consumer/consumer.component";
import { CompareComponent } from "./compare/compare.component";

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
  },
  {
    component: ConsumerComponent,
    path: 'consumer'
  },
  {
    component: CompareComponent,
    path: 'compare'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
