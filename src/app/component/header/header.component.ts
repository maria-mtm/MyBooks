import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})


export class HeaderComponent implements OnInit{
  public miUsuario: Usuario
  constructor()
  {
    this.miUsuario = new Usuario (1, "Lorena", "Lopez", "lorena@lopez.com", "www.lorenalopez.es")
  }

  ngOnInit():void{}

}
