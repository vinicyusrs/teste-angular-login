import { Component } from '@angular/core';
import { Transmissores } from '../transmissores.model';
import { TransmissoresService } from '../transmissores.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-transmissores-update',
  templateUrl: './transmissores-update.component.html',
  styleUrls: ['./transmissores-update.component.css']
})
export class TransmissoresUpdateComponent {

  transmissores: Transmissores = {
    id: 0,
    ip: '',
    descricao1: '',
    descricao2: '',
    pop: '',
    cidade: '',
    marcaolt: '',
    id_projeto_ixc: 0,
    id_transmissor_ixc: 0
   
  }


  constructor(private service: TransmissoresService, 
    private route: ActivatedRoute, 
    private router: Router) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.transmissores.id = Number(id);
      this.findById();
    }
  }

  findById(): void {
    this.service.findById(this.transmissores.id!).subscribe((resposta) => {
     // this.transmissores = resposta      -------- dessa jeito apareceu os dados após clicae deletar
     this.transmissores.ip = resposta.ip
     this.transmissores.descricao1 = resposta.descricao1
     this.transmissores.descricao2 = resposta.descricao2
     this.transmissores.pop = resposta.pop
     this.transmissores.cidade = resposta.cidade
     this.transmissores.marcaolt = resposta.marcaolt
     this.transmissores.id_projeto_ixc = resposta.id_projeto_ixc
     this.transmissores.id_transmissor_ixc = resposta.id_transmissor_ixc
      console.log(this.transmissores)

    })
  }

  update(): void{
    this.service.update(this.transmissores).subscribe((resposta) => {
      this.router.navigate(['transmissores'])
      this.service.mensagem('Transmissores atualizado com Sucesso!!')
      }, err => {
          this.service.mensagem("Validar se todos os campos estão preenchidos corretamente!")
      });


    }

  cancel(): void{
    this.router.navigate(['transmissores'])
  }
}