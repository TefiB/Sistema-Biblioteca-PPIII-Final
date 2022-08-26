import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { UsuariosService } from './services/usuarios.service';
import { AuthGuard } from './auth.guard';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'; 
import {TokenInterceptorService} from './services/token-interceptor.service';
import { NavegacionadminComponent } from './components/navegacionadmin/navegacionadmin.component';
import { CatalogoadminComponent } from './components/catalogoadmin/catalogoadmin.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeadminComponent } from './components/homeadmin/homeadmin.component';
import { BannerComponent } from './components/banner/banner.component';
import { LogoiftsComponent } from './components/logoifts/logoifts.component';
import { HeaderComponent } from './components/header/header.component';
import { PyRadminComponent } from './components/py-radmin/py-radmin.component';
import { ListausuariosComponent } from './components/listausuarios/listausuarios.component';
import { PrincipaladminComponent } from './components/principaladmin/principaladmin.component';
import { CatalogolibroComponent } from './components/catalogolibro/catalogolibro.component';
import { CatalogonotebookComponent } from './components/catalogonotebook/catalogonotebook.component';
import { AddlibroComponent } from './components/addlibro/addlibro.component';
import { VerejemplarComponent } from './components/verejemplar/verejemplar.component';
import { LoginComponent } from './components/login/login.component';
import { ForgotpassComponent } from './components/forgotpass/forgotpass.component';
import { AddnotebookComponent } from './components/addnotebook/addnotebook.component';
import { AddautorComponent } from './components/addautor/addautor.component';
import { ListaautoresComponent } from './components/listaautores/listaautores.component';
import { HomeuserComponent } from './components/homeuser/homeuser.component';
import { CatalogolibrouserComponent } from './components/catalogolibrouser/catalogolibrouser.component';
import { CatalogonotebookuserComponent } from './components/catalogonotebookuser/catalogonotebookuser.component';
import { MisprestamosuserComponent } from './components/misprestamosuser/misprestamosuser.component';
import { NavegacionuserComponent } from './components/navegacionuser/navegacionuser.component';
import { PrincipaluserComponent } from './components/principaluser/principaluser.component';

@NgModule({
  declarations: [
    AppComponent,
    NavegacionadminComponent,
    CatalogoadminComponent,
    FooterComponent,
    HomeadminComponent,
    BannerComponent,
    LogoiftsComponent,
    HeaderComponent,
    PyRadminComponent,
    ListausuariosComponent,
    PrincipaladminComponent,
    CatalogolibroComponent,
    CatalogonotebookComponent,
    AddlibroComponent,
    VerejemplarComponent,
    LoginComponent,
    ForgotpassComponent,
    AddnotebookComponent,
    AddautorComponent,
    ListaautoresComponent,
    HomeuserComponent,
    CatalogolibrouserComponent,
    CatalogonotebookuserComponent,
    MisprestamosuserComponent,
    NavegacionuserComponent,
    PrincipaluserComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    UsuariosService,
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
