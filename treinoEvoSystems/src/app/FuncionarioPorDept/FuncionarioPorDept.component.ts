import { FuncionarioPorDeptService } from './funcionariopordept.service';
import { Component, OnInit } from '@angular/core';
import { Funcionario } from '../models/funcionario.model';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-FuncionarioPorDept',
  templateUrl: './FuncionarioPorDept.component.html',
  styleUrls: ['./FuncionarioPorDept.component.css']
})
export class FuncionarioPorDeptComponent implements OnInit {

  erro: any;
  funcionarios: Array<any> = new Array();
  funcionario: Funcionario = new Funcionario();
  id: string;

  constructor(private router: ActivatedRoute, private route: Router,
    private funcionarioPorDeptService: FuncionarioPorDeptService) {
    this.listarFuncionariosPorDept
   }

  ngOnInit() {
    this.router.queryParams.subscribe(queryParam => {
      this.id = queryParam.id;
    })
    this.listarFuncionariosPorDept(this.id);
  }

  redirectCadastroF() {
    this.route.navigate(['/CadastrarFunc']);
  }

  redirectEditarF() {
    this.route.navigate(['/EditarFunc']);
  }

  redirectPgDept() {
    this.route.navigate(['/Departamentos']);
  }

  listarFuncionariosPorDept(id: string) {
    this.funcionarioPorDeptService.listarFuncionariosPorDept(id).subscribe(
      funcionario => {
        this.funcionarios = funcionario;
      }, err => {
        console.log('Erro ao listar funcionarios');
      }
    )
  }

  deletarFuncionarios(id: number) {
    this.funcionarioPorDeptService.deletarFuncionario(id).subscribe(
    funcionario => {
      this.funcionarios = funcionario;
      this.listarFuncionariosPorDept(this.id);
    }, err => {
      console.log('Erro ao deletar funcionarios');
    }
    )
  }
}
