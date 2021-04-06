import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ConnectComponent } from './connect/connect.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { from } from 'rxjs';
import { TasksComponent } from './tasks/tasks.component';
import { RegisterComponent } from './register/register.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { UserModComponent } from './user-mod/user-mod.component';

const appRoutes: Routes = [
  { path: 'taches', component: TasksComponent },
  { path: 'connection', component: ConnectComponent },
  { path: 'enregistrement', component: RegisterComponent },
  { path: 'monCompte', component: UserModComponent },
  { path: '404', component: NotFoundComponent },
  { path: '', redirectTo: '/connection', pathMatch: 'full' },
  { path: '**', redirectTo: '/404' }
];

@NgModule({
  declarations: [
    AppComponent,
    ConnectComponent,
    HeaderComponent,
    FooterComponent,
    TasksComponent,
    RegisterComponent,
    NotFoundComponent,
    UserModComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
