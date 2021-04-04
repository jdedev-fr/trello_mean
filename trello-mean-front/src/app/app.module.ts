import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ConnectComponent } from './connect/connect.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { from } from 'rxjs';
import { TasksComponent } from './tasks/tasks.component';
import { RegisterComponent } from './register/register.component';

const appRoutes: Routes = [
  { path: 'taches', component: TasksComponent },
  { path: 'connection', component: ConnectComponent },
  { path: 'enregistrement', component: RegisterComponent },
  { path: '', redirectTo: '/connection', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    ConnectComponent,
    HeaderComponent,
    FooterComponent,
    TasksComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
