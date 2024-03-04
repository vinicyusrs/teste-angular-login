import { Component } from '@angular/core';
import { Transmissores } from '../transmissores.model';
import { TransmissoresService } from '../transmissores.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transmissores-read',
  templateUrl: './transmissores-read.component.html',
  styleUrls: ['./transmissores-read.component.css']
})
export class TransmissoresReadComponent {

  transmissores: Transmissores[] = []

  displayedColumns: string[] = ['id', 'ip', 'descricao1', 'descricao2', 'pop' , 'cidade', 'marcaolt', 'id_projeto_ixc', 'id_transmissor_ixc', 'acoes'];

  constructor(private service: TransmissoresService, private router: Router) { }

  ngOnInit(): void {
    this.findAll();
  }
 
  findAll() {
    this.service.findAll().subscribe(resposta =>{
      this.transmissores = resposta;
    })
  }
   
  navegarParaTransmissoresCreate(){
    this.router.navigate(["transmissores/create"])
  }
  
}