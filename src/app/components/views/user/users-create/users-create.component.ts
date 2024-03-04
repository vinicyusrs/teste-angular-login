import { Component } from '@angular/core';
import { Users } from '../users.model';
import { UsersService } from '../users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users-create',
  templateUrl: './users-create.component.html',
  styleUrls: ['./users-create.component.css']
})
export class UsersCreateComponent {

  users: Users = {
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    role: ''
  }


  constructor(private service: UsersService, private router: Router) {}
 
 
  create(): void {
    this.service.create(this.users). subscribe((resposta) =>{
      this.router.navigate(['users']);
      this.service.mensagem('Users criado com sucesso!');
    }, err => {
      for(let i = 0; i < err.error.errors.length; i++){
        this.service.mensagem(err.error.errors[i].message)
      }
    })
  }
  
  cancel(): void{
    this.router.navigate(['users'])
  }
  
  }