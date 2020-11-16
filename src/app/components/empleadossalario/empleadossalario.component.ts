import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {Empleado} from './../../models/empleado';
import {EmpleadoService} from './../../../services/empleado.service';

@Component({
  selector: 'app-empleadossalario',
  templateUrl: './empleadossalario.component.html',
  styleUrls: ['./empleadossalario.component.css'],
  providers:[EmpleadoService]
})

export class EmpleadossalarioComponent implements OnInit {

  public empleados: Array<Empleado>; 
  @ViewChild("cajaSalario") cajaSalario:ElementRef;

  buscarEmpleados(){
      var salario = this.cajaSalario.nativeElement.value;
      this._service.buscarEmpleadosSalario(salario).subscribe(response =>{
          this.empleados = response;
      }, error=>{
        console.log(error);
      });
  }


  constructor(private _service: EmpleadoService) { 
    this.empleados = [];
  }

  ngOnInit(): void {
  }

}
