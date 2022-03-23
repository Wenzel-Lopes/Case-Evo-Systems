import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Funcionario } from '../models/funcionario.model';

@Injectable({
  providedIn: 'root'
})
export class CadastrarFuncService {

  constructor(private http: HttpClient) { }

  public cadastrarFuncionario(funcionario: Funcionario):Observable<any>{
    return this.http.post('https://localhost:7239/api/Funcionario', funcionario);
  }
}
