import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { CatalogoadminComponent } from './components/catalogoadmin/catalogoadmin.component';
import { PyRadminComponent } from './components/py-radmin/py-radmin.component';
import { ListausuariosComponent } from './components/listausuarios/listausuarios.component';
import { PrincipaladminComponent } from './components/principaladmin/principaladmin.component';

import { CatalogolibroComponent } from './components/catalogolibro/catalogolibro.component';
import { CatalogonotebookComponent } from './components/catalogonotebook/catalogonotebook.component';
import { AddlibroComponent } from './components/addlibro/addlibro.component';
import { AddnotebookComponent } from './components/addnotebook/addnotebook.component';

import { LoginComponent } from './components/login/login.component';
import { ForgotpassComponent } from './components/forgotpass/forgotpass.component';




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
		path: 'py/radmin',
		component: PyRadminComponent,
		
	},
	{
		path: 'listausuarios',
		component: ListausuariosComponent,
		
	},
	{
		path: 'principaladmin',
		component: PrincipaladminComponent,
		
	}
	
	
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
