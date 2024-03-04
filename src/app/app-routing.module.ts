import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/views/home/home.component';


import { LoginComponent } from './components/views/login/login.component';
import { authGuard } from './guards/auth.guard';
import { TransmissoresReadComponent } from './components/views/transmissor/transmissores-read/transmissores-read.component';
import { TransmissoresCreateComponent } from './components/views/transmissor/transmissores-create/transmissores-create.component';
import { TransmissoresDeleteComponent } from './components/views/transmissor/transmissores-delete/transmissores-delete.component';
import { TransmissoresUpdateComponent } from './components/views/transmissor/transmissores-update/transmissores-update.component';
import { UsersReadComponent } from './components/views/user/users-read/users-read.component';
import { UsersCreateComponent } from './components/views/user/users-create/users-create.component';
import { UsersDeleteComponent } from './components/views/user/users-delete/users-delete.component';
import { UsersUpdateComponent } from './components/views/user/users-update/users-update.component';

import { MassivaReadComponent } from './components/views/massivaos/massiva-read/massiva-read.component';
import { AtivadoroltReadComponent } from './components/views/ativadorolt/ativadorolt-read/ativadorolt-read.component';
import { TrocarwifisenhareadComponent } from './components/views/trocawifisenha/trocarwifisenharead/trocarwifisenharead.component';


const routes: Routes = [

  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login'
    },
  {
    path: 'login',
    component: LoginComponent
    },
    {
    path: '',
      component: HomeComponent
    },
    {
      path: 'transmissores',
      component: TransmissoresReadComponent, canActivate:[authGuard]
    },
  
    {
      path: 'transmissores/create',
      component: TransmissoresCreateComponent, canActivate:[authGuard]
    },
    {
      path: 'transmissores/delete/:id',
      component: TransmissoresDeleteComponent, canActivate:[authGuard]
    },
    {
      path: 'transmissores/update/:id',
      component: TransmissoresUpdateComponent, canActivate:[authGuard]
    },

    {
      path: 'users',
      component: UsersReadComponent, canActivate:[authGuard]
    },
  
    {
      path: 'users/create',
      component: UsersCreateComponent, canActivate:[authGuard]
    },
    {
      path: 'users/delete/:id',
      component: UsersDeleteComponent, canActivate:[authGuard]
    },
    {
      path: 'users/update/:id',
      component: UsersUpdateComponent, canActivate:[authGuard]
    },
    {
      path: 'massiva',
      component: MassivaReadComponent, canActivate:[authGuard]
    },
    {
      path: 'ativadorolt',
      component: AtivadoroltReadComponent, canActivate:[authGuard]
    },
    {
      path: 'trocar-wifi-senha',
      component: TrocarwifisenhareadComponent, canActivate:[authGuard]
    }

    


    
    

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
