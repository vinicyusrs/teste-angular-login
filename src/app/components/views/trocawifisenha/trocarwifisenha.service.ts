import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { environment } from 'src/environments/environment.development';
import { Trocarwifisenha } from './trocarwifisenha.model';
import { Observable } from 'rxjs';
import { Find_by_mac } from './find_by_mac.model';
import { TrocarwifisenhaSshresult } from './trocarwifisenha-sshresult.model';

@Injectable({
  providedIn: 'root'
})
export class TrocarwifisenhaService {

  baseUrl: String = environment.baseUrl;

  constructor(private http: HttpClient, private _snack: MatSnackBar) { }

  pesquisar(mac: string): Observable<Find_by_mac>{
    const url = `${this.baseUrl}/dadosplanilhatech/find_by_mac`
    const requestBody = { mac };
    return this.http.post<Find_by_mac>(url, requestBody);
  }

  enviarDados(trocarwifisenhaSshresult: TrocarwifisenhaSshresult): Observable<any> {
    const url = `${this.baseUrl}/api/trocar-senha`;
    return this.http.post<any>(url, trocarwifisenhaSshresult);
  }

  executar(trocarwifisenha: Trocarwifisenha): Observable<TrocarwifisenhaSshresult> {
    const url = `${this.baseUrl}/api/trocar-senha`;
    const requestBody = { trocarwifisenha};
    return this.http.post<TrocarwifisenhaSshresult>(url, trocarwifisenha);
  }




  mensagem(str: String): void {
    this._snack.open(`${str}`, 'OK', {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 3000
    })
  }
  
}
