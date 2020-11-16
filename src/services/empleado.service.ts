import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Global} from './global';

@Injectable()
export class EmpleadoService{

    private url:string;

    constructor(private _http:HttpClient) {
       this.url = Global.urlempleados 
    }

    getOficios():Observable<any>{
        var request = "api/Empleados/oficios";
        return this._http.get(this.url + request);
    }

    buscarEmpleadosSalario(salario):Observable<any>{
        var request="/api/empleados/empleadossalario/" + salario;
        return this._http.get(this.url + request);
    }

    buscarEmpleadosOficio(oficio):Observable<any>{
        var request ="api/Empleados/EmpleadosOficio/" + oficio;
        return this._http.get(this.url + request);
    }

}