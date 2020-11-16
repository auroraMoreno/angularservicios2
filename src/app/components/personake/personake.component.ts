import { Component, OnInit } from '@angular/core';
import {PersonajeService} from './../../../services/personaje.service';
import {Personaje} from './../../models/personaje';

@Component({
  selector: 'app-personake',
  templateUrl: './personake.component.html',
  styleUrls: ['./personake.component.css'],
  providers:[PersonajeService]
})
export class PersonakeComponent implements OnInit {

  
  public personajes: Array<Personaje>;

  constructor(private _personajeService: PersonajeService) { }

  ngOnInit(): void {
    this._personajeService.getMensaje();
    this.personajes = this._personajeService.getPersonajes();
  }

}