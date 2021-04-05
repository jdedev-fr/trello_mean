import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ConnectComponent } from './connect/connect.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { from } from 'rxjs';
import { TasksComponent } from './tasks/tasks.component';
import { RegisterComponent } from './register/register.component';
import { NotFoundComponent } from './not-found/not-found.component';

const appRoutes: Routes = [
  { path: 'taches', component: TasksComponent },
  { path: 'connection', component: ConnectComponent },
  { path: 'enregistrement', component: RegisterComponent },
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
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
