
import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Funcionario } from '../models/funcionario.model';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioPorDeptService {

  constructor(private http: HttpClient) { }

  public listarFuncionariosPorDept(id: string):Observable<any>{
    return this.http.get('https://localhost:7239/api/Funcionario/getById?id=' + id);
  }

  public atualizarFuncionario(funcionario: Funcionario):Observable<any>{
    return this.http.put('https://localhost:7239/api/Funcionario', funcionario);
  }

  public deletarFuncionario(id: number):Observable<any>{
    return this.http.delete('https://localhost:7239/api/Funcionario/' + id);
  }
}
