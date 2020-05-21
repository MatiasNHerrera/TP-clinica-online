import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistroComponent } from './componentes/registro/registro.component';
import { LoginComponent } from './componentes/login/login.component';
import { PrincipalComponent } from './componentes/principal/principal.component';
import { RegistroAdminComponent } from './componentes/registro-admin/registro-admin.component';
import { AuthGuardService } from './servicios/auth-guard.service';
import { HabilitarProfesionalComponent } from './componentes/habilitar-profesional/habilitar-profesional.component';


const routes: Routes = [
  {path: "", redirectTo: "/login", pathMatch: "full"},
  {path: "registro", component: RegistroComponent},
  {path: "login", component: LoginComponent},
  {path: "principal", component: PrincipalComponent},
  {path: "registro/admin", component: RegistroAdminComponent},
  {path: "habilitar", component: HabilitarProfesionalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }