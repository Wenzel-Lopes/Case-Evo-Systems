import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Departamento } from '../models/departamento.model';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

constructor(private http: HttpClient) { }

public cadastrarDepartamento(departamento: Departamento):Observable<any>{
  return this.http.post('https://localhost:7239/api/Departamento', departamento);
}

}
