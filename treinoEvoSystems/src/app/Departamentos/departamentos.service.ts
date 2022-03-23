
import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Departamento } from '../models/departamento.model';

@Injectable({
  providedIn: 'root'
})
export class DepartamentosService {

  constructor(private http: HttpClient) { }

  public listarDepartamentos():Observable<any>{
    return this.http.get('https://localhost:7239/api/Departamento');
  }

  public deletarDepartamento(id: number):Observable<any>{
    return this.http.delete('https://localhost:7239/api/Departamento/' + id);
  }
}
