import { DepartamentosService } from './departamentos.service';
import { Component, OnInit } from '@angular/core';
import { Departamento } from '../models/departamento.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-Departamentos',
  templateUrl: './Departamentos.component.html',
  styleUrls: ['./Departamentos.component.css']
})

export class DepartamentosComponent implements OnInit {
  erro: any;
  departamentos: Array<any> = new Array();
  departamento: Departamento = new Departamento();

  constructor(private router: Router, private DepartamentosService: DepartamentosService) {
    this.listarDepartamentos
  }

  ngOnInit() {
    this.listarDepartamentos();
  }

  redirect(id: number) {
    this.router.navigate(['/FuncionariosPorDept'], { queryParams: { id: id } });
    console.log(id);
  }

  redirectCadastro() {
    this.router.navigate(['/CadastrarDept'] );
  }

  redirectEditar() {
    this.router.navigate(['/EditarDept'] );
  }

  listarDepartamentos() {
    this.DepartamentosService.listarDepartamentos().subscribe(
      departamento => {
        this.departamentos = departamento;
      }, err => {
        console.log('Erro ao listar departamentos');
      }
    )
  }

  deletarDepartamento(id: number) {
    this.DepartamentosService.deletarDepartamento(id).subscribe(
      departamento => {
      this.departamentos = departamento;
    }, err => {
      console.log('Erro ao deletar departamento');
    }
  )
}
}
