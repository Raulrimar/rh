import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar/navbar.component';
import { TableComponent } from './table/table.component';
import { FormServidorComponent } from './Formularios/form-servidor/form-servidor.component';

const routes: Routes = [
  {
    path: '', component: NavbarComponent
  },
  {
    path: 'formulario', component: FormServidorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
