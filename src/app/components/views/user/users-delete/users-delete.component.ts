import { Component } from '@angular/core';
import { Users } from '../users.model';
import { UsersService } from '../users.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-users-delete',
  templateUrl: './users-delete.component.html',
  styleUrls: ['./users-delete.component.css']
})
export class UsersDeleteComponent {

  users: Users = {
    id: 0,
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    role: ''
  }

  constructor(private service: UsersService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.users.id = Number(id);
      this.findById();
    }
  }


  findById(): void {
    this.service.findById(this.users.id!).subscribe((resposta) => {
     // this.users = resposta      -------- dessa jeito apareceu os dados após clicae deletar
     this.users.firstname = resposta.firstname
     this.users.lastname = resposta.lastname
     this.users.email = resposta.email
     this.users.password = resposta.password
     this.users.role = resposta.role
      console.log(this.users)

    })
  }

  delete(): void {
    this.service.delete(this.users.id!.toString()).subscribe((resposta) => {
      this.router.navigate(['users'])
      this.service.mensagem('Users deletado com sucesso!!')
      return
    }, err => {
      this.service.mensagem(err.error.error)
    })
  }

  cancel(): void{
    this.router.navigate(['users'])
  }
}
