import { Component, OnInit } from '@angular/core';
import {EmpleadoRoutingService} from './../../../services/empleadorouting.service';
import {Empleado} from './../../models/empleado';
import {ActivatedRoute, Params} from '@angular/router';


@Component({
  selector: 'app-detallesempleados',
  templateUrl: './detallesempleados.component.html',
  styleUrls: ['./detallesempleados.component.css'],
  providers:[EmpleadoRoutingService]
})
export class DetallesempleadosComponent implements OnInit {

  public empleado:Empleado;

  constructor( private _service: EmpleadoRoutingService,
    private _activeRoute:ActivatedRoute) { }

  buscarEmpleado(empno){
    console.log(empno);
    this._service.buscarEmpleado(empno).subscribe(response=>{
      this.empleado = response; 
    });
  }

  ngOnInit(): void {
    this._activeRoute.params.subscribe((params: Params)=>{
      var empno = params.empno;
      this.buscarEmpleado(empno);
    });
  }

}
