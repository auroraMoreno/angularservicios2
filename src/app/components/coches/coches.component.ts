import { Component, OnInit } from '@angular/core';
import {Coche} from './../../models/coche';
import {CocheService} from './../../../services/coche.service';

@Component({
  selector: 'app-coches',
  templateUrl: './coches.component.html',
  styleUrls: ['./coches.component.css'],
  providers:[CocheService]
})
export class CochesComponent implements OnInit {

  public coches: Array<Coche>;

  constructor(private _serviceCoche:CocheService) { }

  ngOnInit(): void {
    //this._serviceCoche.mostrarMensaje();
    this._serviceCoche.getCoches().subscribe(response =>{
        console.log(response);
        this.coches = response;
    },error=>{
      console.log("error");
    });
  }

}
