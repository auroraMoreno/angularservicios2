import { Component, OnInit } from '@angular/core';
import {EmpleadoRoutingService} from './../../../services/empleadorouting.service';
import {Empleado} from './../../models/empleado';

@Component({
  selector: 'app-tablaempleados',
  templateUrl: './tablaempleados.component.html',
  styleUrls: ['./tablaempleados.component.css'],
  providers:[EmpleadoRoutingService]
})
export class TablaempleadosComponent implements OnInit {

  public empleados: Array<Empleado>; 

  constructor(private _service:EmpleadoRoutingService) { }

  ngOnInit(): void {
    this._service.getEmpleados().subscribe(response=>{
      this.empleados = response;
    });
  }

}
