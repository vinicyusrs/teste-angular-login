import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';
import {JwtHelperService} from '@auth0/angular-jwt'
import { environment } from 'src/environments/environment.development';
import { TokenApiModel } from '../interceptors/token-api.model';
import { MatSnackBar } from '@angular/material/snack-bar';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = environment.baseUrl;
  private userPayload:any;
  toast: any;

  


  mostrarMenuEmitter = new EventEmitter<boolean>();

  constructor(private http: HttpClient, public router: Router, private _snack: MatSnackBar) {
 //   this.userPayload = this.decodedToken();
   }

  signUp(userObj: any) {
    return this.http.post<any>(`${this.baseUrl}/users/register`, userObj)
  }

  signIn(loginObj : any){
    return this.http.post<any>(`${this.baseUrl}/users/authenticate`,loginObj)
  this.mostrarMenuEmitter.emit(true);  
    
  }

  signOut(){
    localStorage.clear();
    this.router.navigate(['login'])
  }

  storeToken(tokenValue: string){
      if (tokenValue != null) {
      localStorage.setItem('token', tokenValue)
    }
  // localStorage.setItem('token', tokenValue) --- o codigo estava assim anteriormente,
// }
    return false;
  }

    
   
  storeRefreshToken(tokenValue: string){
    localStorage.setItem('refreshToken', tokenValue)
  }

  getToken(){

   return localStorage.getItem('token')
  }


  getRefreshToken(){
    return localStorage.getItem('refreshToken')
  }

  isLoggedIn(): boolean{
   
    console.log(!!localStorage.getItem('token'))
    
  return !!localStorage.getItem('token')
   
 }

  /*
  decodedToken(){
    const jwtHelper = new JwtHelperService();
    const token = this.getToken()!;
    console.log(jwtHelper.decodeToken(token))
    return jwtHelper.decodeToken(token)
  }

  getfullNameFromToken(){
    if(this.userPayload)
    return this.userPayload.name;
  }

  getRoleFromToken(){
    if(this.userPayload)
    return this.userPayload.role;
  }
  */

  renewToken(tokenApi : TokenApiModel){
    return this.http.post<any>(`${this.baseUrl}refresh`, tokenApi)
  }

  mensagem(str: String): void {
    this._snack.open(`${str}`, 'OK', {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 3000
    })
  }
}
