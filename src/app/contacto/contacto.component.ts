import { Component, OnInit } from '@angular/core';
import { ContactoUsuario} from '../models/contacto.usuario';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent implements OnInit {
    public usuario: ContactoUsuario;
  constructor() {
    this.usuario = new ContactoUsuario('','','','');
   }

  ngOnInit(): void {
  }

  onSubmit(){
    //alert("Evento submit lanzado");
    console.log(this.usuario);
  }

}
