import { EditarDeptService } from './editar-dept.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Departamento } from '../models/departamento.model';

@Component({
  selector: 'app-EditarDept',
  templateUrl: './EditarDept.component.html',
  styleUrls: ['./EditarDept.component.css']
})
export class EditarDeptComponent implements OnInit {
  erro: any;
  departamentos: Array<any> = new Array();
  departamento: Departamento = new Departamento();

  constructor(private router: Router, private EditarDept: EditarDeptService) { }

  ngOnInit() {
  }

  editarDepartamentos() {
    this.EditarDept.editarDepartamento(this.departamento).subscribe(
      departamento => {
        console.log(this.departamento);
        this.redirectDepartamento();
      }, err => {
        console.log('Erro ao editar departamentos');
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
