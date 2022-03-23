import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Departamento } from '../models/departamento.model';

@Injectable({
  providedIn: 'root'
})
export class EditarDeptService {

  constructor(private http: HttpClient) { }

  public editarDepartamento(funcionario: Departamento):Observable<any>{
    return this.http.put('https://localhost:7239/api/Departamento', funcionario);
  }


}
