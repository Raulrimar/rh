import { Component, OnInit } from '@angular/core';
import { InterfaceTabela } from './modelo/interface-tabela';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  //criando dataSource
   dadosTabela: InterfaceTabela[] = [
    {'_id': '1', 'nome': 'João', 'matricula': '123', 'cargo': 'Desenvolvedor', 'lotacao': 'Desenvolvimento'},
   ]; // a tipagem do array  é tabela
   
   displayedColumns: string[]=['nome', 'matricula', 'cargo', 'lotacao'];

  constructor() { 
  
  }

  ngOnInit(): void {
  }

}
