import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioRegistroComponent } from './component/formulario-registro/formulario-registro.component';
import { LibrosComponent } from './pages/libros/libros.component';
import { PerfilComponent } from './pages/perfil/perfil.component';

const routes: Routes = [
  {path:"registro", component: FormularioRegistroComponent},
  {path:"perfil", component: PerfilComponent},
  {path:"libros", component: LibrosComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
