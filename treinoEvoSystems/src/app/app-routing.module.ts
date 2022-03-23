import { CadastrarDeptComponent } from './CadastrarDept/CadastrarDept.component';
import { FuncionarioPorDeptComponent } from './FuncionarioPorDept/FuncionarioPorDept.component';
import { DepartamentosComponent } from './Departamentos/Departamentos.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditarDeptComponent } from './EditarDept/EditarDept.component';
import { EditarFuncComponent } from './EditarFunc/EditarFunc.component';
import { CadastrarFuncComponent } from './CadastrarFunc/CadastrarFunc.component';

const routes: Routes = [
  { path: 'Departamentos', component: DepartamentosComponent},
  { path: 'FuncionariosPorDept', component: FuncionarioPorDeptComponent},
  { path: 'CadastrarDept', component: CadastrarDeptComponent},
  { path: 'CadastrarFunc', component: CadastrarFuncComponent},
  { path: 'EditarDept', component: EditarDeptComponent},
  { path: 'EditarFunc', component: EditarFuncComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
