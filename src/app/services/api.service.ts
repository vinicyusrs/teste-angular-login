import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = environment.baseUrl;
  constructor(private http: HttpClient) {}

  getUsers() {
    const url = `${this.baseUrl}/users`
    return this.http.get<any>(url);
  }
}
