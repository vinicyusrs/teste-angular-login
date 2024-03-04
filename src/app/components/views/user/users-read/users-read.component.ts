import { Component } from '@angular/core';
import { Users } from '../users.model';
import { UsersService } from '../users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users-read',
  templateUrl: './users-read.component.html',
  styleUrls: ['./users-read.component.css']
})
export class UsersReadComponent {

  users: Users[] = []

  displayedColumns: string[] = ['id', 'firstname', 'lastname', 'email' , 'role', 'acoes'];

  constructor(private service: UsersService, private router: Router) { }

  ngOnInit(): void {
    this.findAll();
  }
 
  findAll() {
    this.service.findAll().subscribe(resposta =>{
      this.users = resposta;
    })
  }
   
  navegarParaUsersCreate(){
    this.router.navigate(["users/create"])
  }
  
}
