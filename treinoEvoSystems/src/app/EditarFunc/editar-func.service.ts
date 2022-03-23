import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Funcionario } from '../models/funcionario.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EditarFuncService {

  constructor(private http: HttpClient) { }

  public atualizarFuncionario(funcionario: Funcionario):Observable<any>{
    return this.http.put('https://localhost:7239/api/Funcionario', funcionario);
  }
}
