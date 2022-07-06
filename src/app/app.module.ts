import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {FormsModule} from '@angular/forms';
import { LoginComponentComponent } from './login-component/login-component.component';
import { OperatorComponent } from './operator/operator.component';
import { AddComponent } from './add/add.component'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponentComponent,
    OperatorComponent,
    AddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
