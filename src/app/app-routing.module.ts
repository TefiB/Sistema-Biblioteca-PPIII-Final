import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';

import { PyRadminComponent } from './components/py-radmin/py-radmin.component';
import { MisprestamosuserComponent } from './components/misprestamosuser/misprestamosuser.component';


import { PrincipaladminComponent } from './components/principaladmin/principaladmin.component';
import { PrincipaluserComponent } from './components/principaluser/principaluser.component';

import { CatalogolibroComponent } from './components/catalogolibro/catalogolibro.component';
import { CatalogolibrouserComponent} from './components/catalogolibrouser/catalogolibrouser.component';

import { CatalogonotebookComponent } from './components/catalogonotebook/catalogonotebook.component';
import { CatalogonotebookuserComponent } from './components/catalogonotebookuser/catalogonotebookuser.component';

import { AddlibroComponent } from './components/addlibro/addlibro.component';
import { AddnotebookComponent } from './components/addnotebook/addnotebook.component';

import { LoginComponent } from './components/login/login.component';
import { ForgotpassComponent } from './components/forgotpass/forgotpass.component';

import { AddautorComponent } from './components/addautor/addautor.component';
import { ListaautoresComponent } from './components/listaautores/listaautores.component';
import { ListausuariosComponent } from './components/listausuarios/listausuarios.component';
import { CatalogoadminComponent } from './components/catalogoadmin/catalogoadmin.component';




const routes: Routes = [
	{
		path: '',
		redirectTo: 'login',
		pathMatch: 'full'
	},
	{
		path: 'login',
		component: LoginComponent,
		
	},
	{
		path: 'forgotpass',
		component: ForgotpassComponent,
		
	},
  	{
		path: 'catalogoadmin',
		component: CatalogoadminComponent,
		
	},
	{
		path: 'catalogolibro',
		component: CatalogolibroComponent,
		
	},
	{
		path: 'catalogolibrouser',
		component: CatalogolibrouserComponent,
		
	},
	{
		path: 'addlibro',
		component: AddlibroComponent,
		
	},
	{
		path: 'addnotebook',
		component: AddnotebookComponent,
		
	},
	{
		path: 'catalogonotebook',
		component: CatalogonotebookComponent,
		
	},
	{
		path: 'catalogonotebookuser',
		component: CatalogonotebookuserComponent,
		
	},
	{
		path: 'addautor',
		component: AddautorComponent,
		
	},
	{
		path: 'listaautores',
		component: ListaautoresComponent,
		
	},
	{
		path: 'py/radmin',
		component: PyRadminComponent,
		
	},
	{
		path: 'misprestamosuser',
		component: MisprestamosuserComponent,
		
	},
	{
		path: 'listausuarios',
		component: ListausuariosComponent,
		
	},
	{
		path: 'principaladmin',
		component: PrincipaladminComponent,
		
	},
	{
		path: 'principaluser',
		component: PrincipaluserComponent,
		
	}
	
	
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
