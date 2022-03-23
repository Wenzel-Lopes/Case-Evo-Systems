import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DepartamentosComponent } from './Departamentos/Departamentos.component';
import { FuncionarioPorDeptComponent } from './FuncionarioPorDept/FuncionarioPorDept.component';
import { CadastrarDeptComponent } from './CadastrarDept/CadastrarDept.component';
import { CadastrarFuncComponent } from './CadastrarFunc/CadastrarFunc.component';
import { EditarDeptComponent } from './EditarDept/EditarDept.component';
import { EditarFuncComponent } from './EditarFunc/EditarFunc.component';


@NgModule({
  declarations: [				
    AppComponent,
      DepartamentosComponent,
      FuncionarioPorDeptComponent,
      CadastrarDeptComponent,
      CadastrarFuncComponent,
      EditarDeptComponent,
      EditarFuncComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
