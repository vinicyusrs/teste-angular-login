import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { environment } from 'src/environments/environment.development';
import { Users } from './users.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  baseUrl: String = environment.baseUrl;

  constructor(private http: HttpClient, private _snack: MatSnackBar) { }

  findAll():Observable<Users[]> {
    const url = `${this.baseUrl}/users`
    return this.http.get<Users[]>(url)
  }  

  findById(id: number): Observable<Users>{
    const url = `${this.baseUrl}/users/${id}`
    return this.http.get<Users>(url)
  }

  create(users: Users): Observable<Users>{
    const url = `${this.baseUrl}/users/register`
    return this.http.post<Users>(url, users);
  }

  delete(id: String):Observable<void>{
    const url = `${this.baseUrl}/users/${id}`
    return this.http.delete<void>(url)
  }

  update(users: Users):Observable<void>{
    const url = `${this.baseUrl}/users/${users.id}`
    return this.http.put<void>(url, users)
  }

  mensagem(str: String): void {
    this._snack.open(`${str}`, 'OK', {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 3000
    })
  }
}
