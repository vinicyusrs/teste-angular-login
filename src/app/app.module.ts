import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HeaderComponent } from './components/template/header/header.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { NavComponent } from './components/template/nav/nav.component';

import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { HomeComponent } from './components/views/home/home.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatProgressBarModule} from '@angular/material/progress-bar';



import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from './components/views/login/login.component';
import { CommonModule } from '@angular/common';
import { NgToastModule } from 'ng-angular-popup';
import { TokenInterceptor } from './interceptors/token.interceptor';

import { ProfileComponent } from './components/views/profile/profile.component';

import { TransmissoresCreateComponent } from './components/views/transmissor/transmissores-create/transmissores-create.component';
import { TransmissoresDeleteComponent } from './components/views/transmissor/transmissores-delete/transmissores-delete.component';
import { TransmissoresReadComponent } from './components/views/transmissor/transmissores-read/transmissores-read.component';
import { TransmissoresUpdateComponent } from './components/views/transmissor/transmissores-update/transmissores-update.component';
import { UsersDeleteComponent } from './components/views/user/users-delete/users-delete.component';
import { UsersUpdateComponent } from './components/views/user/users-update/users-update.component';
import { UsersCreateComponent } from './components/views/user/users-create/users-create.component';
import { UsersReadComponent } from './components/views/user/users-read/users-read.component';



import { MassivaReadComponent } from './components/views/massivaos/massiva-read/massiva-read.component';
import { MassivaCreateComponent } from './components/views/massivaos/massiva-create/massiva-create.component';
import { MassivaEditarComponent } from './components/views/massivaos/massiva-editar/massiva-editar.component';
import { AtivadoroltRelatorioComponent } from './components/views/ativadorolt/ativadorolt-relatorio/ativadorolt-relatorio.component';
import { AtivadoroltIxcazzaComponent } from './components/views/ativadorolt/ativadorolt-ixcazza/ativadorolt-ixcazza.component';
import { TrocarwifisenhareadComponent } from './components/views/trocawifisenha/trocarwifisenharead/trocarwifisenharead.component';
import { TrocarwifisenhamodalComponent } from './components/views/trocawifisenha/trocarwifisenhamodal/trocarwifisenhamodal.component';












@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
  
    HomeComponent,
   
    LoginComponent,
    ProfileComponent,
 
    TransmissoresCreateComponent,
    TransmissoresDeleteComponent,
    TransmissoresReadComponent,
    TransmissoresUpdateComponent,
    UsersDeleteComponent,
    UsersUpdateComponent,
    UsersCreateComponent,
    UsersReadComponent,
  
    MassivaReadComponent,
    MassivaCreateComponent,
    MassivaEditarComponent,
    AtivadoroltRelatorioComponent,
    AtivadoroltIxcazzaComponent,
    TrocarwifisenhareadComponent,
    TrocarwifisenhamodalComponent
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    MatTableModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatSnackBarModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    NgToastModule,
    MatDialogModule,
    MatProgressBarModule

  ],
  providers: [{provide:HTTP_INTERCEPTORS,
    useClass:TokenInterceptor,
    multi:true}],
  bootstrap: [AppComponent], 

})
export class AppModule { }
