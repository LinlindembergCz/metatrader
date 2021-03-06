import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';
import { NgModule , OnInit}             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteListComponent } from './Components/Cliente/cliente-list.component';
import { MetatraderListComponent } from './Components/Metatrader/metatrader-list.component';
import { ParticipacaoListComponent } from './Components/Participacao/participacao-list.component';
import { LoginComponent } from './Components/Login/login.component';
import { AppComponent } from './app.component';

import { DashboardComponent } from './Components/DashBoard/dashboard.component';
import { RecuperadorSenhaComponent } from './Components/RecuperarSenha/recuperarSenha.component';


const routes: Routes = [
                        { path: 'app', component: AppComponent},
                        { path: 'login', component: LoginComponent },
                        { path: '', redirectTo: '/login', pathMatch: 'full' },
                        { path: 'clientes', component: ClienteListComponent},                    
                        { path: 'metatraders', component: MetatraderListComponent},
                        { path: 'participacoes', component: ParticipacaoListComponent},
                        { path: 'dashboard/:ClienteId', component: DashboardComponent},
                        { path: 'recuperar', component: RecuperadorSenhaComponent}
                       ]; 

@NgModule({
        exports: [ RouterModule ],
        imports: [ RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload' }) ]
         })


export class AppRoutingModule implements OnInit {
        
        usuarioAutenticado: boolean = false;

        ngOnInit() 
        {
    
        }

}
