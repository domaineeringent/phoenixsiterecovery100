import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { BookCallComponent } from './pages/book-call/book-call.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { LoginComponent } from './pages/login/login.component';

export const APP_ROUTES: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'book-a-call', component: BookCallComponent },
  { path: '**', component: NotFoundComponent }
];