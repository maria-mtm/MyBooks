import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoxesComponent } from './component/boxes/boxes.component';
import { FormularioRegistroComponent } from './component/formulario-registro/formulario-registro.component';

const routes: Routes = [
  {path:"registro", component: FormularioRegistroComponent},
  {path:"perfil", component: BoxesComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
