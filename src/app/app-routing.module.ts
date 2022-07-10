import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponentComponent } from './login-component/login-component.component'
import { OperatorComponent } from "./operator/operator.component";
import { AddComponent } from "./add/add.component";
import { ConsumerComponent } from "./consumer/consumer.component";
import { CompareComponent } from "./compare/compare.component";
import { EditComponent } from "./edit/edit.component";

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
    component: OperatorComponent,
    path: 'operator/:x1:x2'
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
  },
  {
    component: EditComponent,
    path: 'edit/:x'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
