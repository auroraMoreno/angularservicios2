import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {Empleado} from './../../models/empleado';
import {EmpleadoService} from './../../../services/empleado.service';

@Component({
  selector: 'app-empleadosoficio',
  templateUrl: './empleadosoficio.component.html',
  styleUrls: ['./empleadosoficio.component.css'],
  providers:[EmpleadoService]
})
export class EmpleadosoficioComponent implements OnInit {

  public empleadosOficios: Array<Empleado>;
  //public oficios: Array<string>;
  public empleados: Array<Empleado>;
  @ViewChild("selectOficio") selectoficio:ElementRef;

  buscarEmpleados(){
    var oficio = this.selectoficio.nativeElement.value;
    console.log(oficio);
    this._service.buscarEmpleadosOficio(oficio).subscribe(response =>{
      this.empleados = response
    },error =>{
      console.log(error);
    });
  }

  constructor(private _service: EmpleadoService) {
    this.empleados=[];
   }

  ngOnInit(): void {
    this._service.getOficios().subscribe(response => {
      this.empleadosOficios = response;
    }, error =>{
      console.log("error");
    });

  }

}
