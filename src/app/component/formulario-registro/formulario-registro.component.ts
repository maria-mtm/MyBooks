import { Component } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/shared/usuario.service';

@Component({
  selector: 'app-formulario-registro',
  templateUrl: './formulario-registro.component.html',
  styleUrls: ['./formulario-registro.component.css']
})
export class FormularioRegistroComponent {

  public usuario: Usuario;
  // public usuarios:Usuario[]

  constructor(public apiService: UsuarioService) { 
    this.apiService.usuario;
  }


  registrarse(inputIdUsuario: HTMLInputElement, inputNombre: HTMLInputElement, inputApellidos: HTMLInputElement, inputCorreo: HTMLInputElement, inputFoto: HTMLInputElement): void {
    let newUsuario: Usuario = new Usuario(inputIdUsuario.valueAsNumber, inputNombre.value, inputApellidos.value, inputCorreo.value, inputFoto.value)
    this.apiService.register(newUsuario).subscribe((data)=>
    {
      console.log(data);
      //utilizando el servicio, aqui se sube los datos a la bbdd
    })
  }


}
