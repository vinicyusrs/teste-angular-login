import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Transmissores } from './transmissores.model';


@Injectable({
  providedIn: 'root'
})
export class TransmissoresService {

  baseUrl: String = environment.baseUrl;

  constructor(private http: HttpClient, private _snack: MatSnackBar) { }

  findAll():Observable<Transmissores[]> {
    const url = `${this.baseUrl}/transmissores`
    return this.http.get<Transmissores[]>(url)
  }  

  findById(id: number): Observable<Transmissores>{
    const url = `${this.baseUrl}/transmissores/${id}`
    return this.http.get<Transmissores>(url)
  }

  create(transmissores: Transmissores): Observable<Transmissores>{
    const url = `${this.baseUrl}/transmissores`
    return this.http.post<Transmissores>(url, transmissores);
  }

  delete(id: String):Observable<void>{
    const url = `${this.baseUrl}/transmissores/${id}`
    return this.http.delete<void>(url)
  }

  update(transmissores: Transmissores):Observable<void>{
    const url = `${this.baseUrl}/transmissores/${transmissores.id}`
    return this.http.put<void>(url, transmissores)
  }

  mensagem(str: String): void {
    this._snack.open(`${str}`, 'OK', {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 3000
    })
  }
}
