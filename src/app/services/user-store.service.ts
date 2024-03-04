import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserStoreService {
  private firstName$ = new BehaviorSubject<string>("");
  private role$ = new BehaviorSubject<string>("");
  
  constructor() { }
  
    public getRoleFromStore(){
      return this.role$.asObservable();
    }
  
    public setRoleForStore(role:string){
      this.role$.next(role);
    }
  
    public getFirstNameFromStore(){
      return this.firstName$.asObservable();
    }
  
    public setFirstNameForStore(firstname:string){
      this.firstName$.next(firstname)
    }
  }

