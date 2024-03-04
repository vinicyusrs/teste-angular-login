import { Component } from '@angular/core';
import { Transmissores } from '../transmissores.model';
import { TransmissoresService } from '../transmissores.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transmissores-create',
  templateUrl: './transmissores-create.component.html',
  styleUrls: ['./transmissores-create.component.css']
})
export class TransmissoresCreateComponent {
  transmissores: Transmissores = {
    ip: '',
    descricao1: '',
    descricao2: '',
    pop: '',
    cidade: '',
    marcaolt: '',
    id_projeto_ixc: 0,
    id_transmissor_ixc: 0
   
  }
  constructor(private service: TransmissoresService, private router: Router) {}
 
 
create(): void {
  this.service.create(this.transmissores). subscribe((resposta) =>{
    this.router.navigate(['transmissores']);
    this.service.mensagem('Transmissores criado com sucesso!');
  }, err => {
    for(let i = 0; i < err.error.errors.length; i++){
      this.service.mensagem(err.error.errors[i].message)
    }
  })
}

cancel(): void{
  this.router.navigate(['transmissores'])
}

}
