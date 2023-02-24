import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Auth/components/login/login.component';
import { DashboardComponent } from './Dashboard/components/dashboard/dashboard.component';
import { EmpresasComponent } from './Mantenedores/components/empresas/empresas.component';
import { UsuariosComponent } from './Mantenedores/components/usuarios/usuarios.component';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: "full"},
  { path: 'login', component: LoginComponent},
  { path: 'home', component: DashboardComponent, 
    children:[
      { path: '',  component: UsuariosComponent },
      { path: 'usuarios', component: UsuariosComponent },
      { path: 'empresas', component: EmpresasComponent }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
