import { EditarFuncService } from './editar-func.service';
import { Router } from '@angular/router';
import { Funcionario } from './../models/funcionario.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-EditarFunc',
  templateUrl: './EditarFunc.component.html',
  styleUrls: ['./EditarFunc.component.css']
})

export class EditarFuncComponent implements OnInit {
  erro: any;
  funcionarios: Array<any> = new Array();
  funcionario: Funcionario = new Funcionario();
  id: string;

  constructor(private router: Router, private EditarFunc: EditarFuncService) { }

  ngOnInit() {}

  atualizarFuncionario() {
    this.EditarFunc.atualizarFuncionario(this.funcionario).subscribe(
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
