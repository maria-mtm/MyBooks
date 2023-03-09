import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { FormularioRegistroComponent } from './component/formulario-registro/formulario-registro.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { LibrosComponent } from './pages/libros/libros.component';
//hemos importado esto en el dia5
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './pages/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    FormularioRegistroComponent,
    RegistroComponent,
    PerfilComponent,
    LibrosComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    //aqui de nuevo
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
