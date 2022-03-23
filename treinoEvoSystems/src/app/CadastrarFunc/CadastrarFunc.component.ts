import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Funcionario } from '../models/funcionario.model';
import { CadastrarFuncService } from './cadastrar-func.service';

@Component({
  selector: 'app-CadastrarFunc',
  templateUrl: './CadastrarFunc.component.html',
  styleUrls: ['./CadastrarFunc.component.css']
})
export class CadastrarFuncComponent implements OnInit {
  erro: any;
  funcionarios: Array<any> = new Array();
  funcionario: Funcionario = new Funcionario();
  id: string;

  constructor(private router: Router, private CadastroFunc: CadastrarFuncService) { }

  ngOnInit() {}


  cadastrarFuncionario() {
    this.CadastroFunc.cadastrarFuncionario(this.funcionario).subscribe(
      departamento => {
        console.log(this.funcionario.id);
        this.redirectFuncionarios(this.funcionario.IdDepartamento);
      }, err => {
        console.log('Erro ao cadastrar funcionarios');
      }
    )
  }

  redirectFuncionarios(id: number) {
    this.router.navigate(['/FuncionariosPorDept'], { queryParams: { id: id } });
  }

}
