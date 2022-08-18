import { Injectable } from '@angular/core';
import { CanActivate} from '@angular/router';
import { Observable } from 'rxjs';
import { UsuariosService } from './services/usuarios.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
	canActivate(){
		if(this.authService.isLoggedIn()){
			return true;
		}
		this.router.navigate(['usuarios/ingresar']);
		return false;
	}
  
  constructor(
		private authService:UsuariosService,
		private router:Router
	){}
}
