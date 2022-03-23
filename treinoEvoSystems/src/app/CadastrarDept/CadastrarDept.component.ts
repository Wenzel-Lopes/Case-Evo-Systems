import { Departamento } from './../models/departamento.model';
import { CadastroService } from './cadastro.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-CadastrarDept',
  templateUrl: './CadastrarDept.component.html',
  styleUrls: ['./CadastrarDept.component.css']
})
export class CadastrarDeptComponent implements OnInit {

  erro: any;
  departamentos: Array<any> = new Array();
  departamento: Departamento = new Departamento();

  constructor(private router: Router, private CadastroDept: CadastroService) { }

  ngOnInit() {}

  cadastrarDepartamentos() {
    this.CadastroDept.cadastrarDepartamento(this.departamento).subscribe(
      departamento => {
        console.log(this.departamento);
        this.redirectDepartamento();
      }, err => {
        console.log('Erro ao cadastrar departamentos');
      }
    )
  }

  redirectDepartamento() {
    this.router.navigate(['/Departamentos'] );
  }

  redirectPgDept() {
    this.router.navigate(['/Departamentos']);
  }
}
