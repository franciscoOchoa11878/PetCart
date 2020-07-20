import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { OffersComponent } from './components/offers/offers.component';
import { ListBooksComponent} from './components/admin/list-books/list-books.component';
import { ListaMascotasComponent } from './components/admin/lista-mascotas/lista-mascotas.component';
import { DetallesMascotasComponent } from './components/detalles-mascotas/detalles-mascotas.component';
import { LoginComponent } from './components/users/login/login.component';
import { RegisterComponent } from './components/users/register/register.component';
import { ProfileComponent } from './components/users/profile/profile.component';
import { Page404Component } from './components/page404/page404.component';
import { AuthGuard } from './guards/auth.guard';
import { from } from 'rxjs';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'offers', component: OffersComponent, canActivate: [AuthGuard] },
  { path: 'book/:id', component: DetallesMascotasComponent},
  { path: 'admin/list-books', component: ListBooksComponent, canActivate: [AuthGuard]}, 
  { path: 'admin/lista-mascotas',component: ListaMascotasComponent, canActivate: [AuthGuard]},
  { path: 'user/login', component: LoginComponent},
  { path: 'user/register', component: RegisterComponent},
  { path: 'user/profile', component: ProfileComponent, canActivate: [AuthGuard] },
  {path: '**', component: Page404Component}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
