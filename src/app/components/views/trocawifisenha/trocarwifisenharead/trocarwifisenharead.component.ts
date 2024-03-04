import { Component } from '@angular/core';
import { Trocarwifisenha } from '../trocarwifisenha.model';
import { TrocarwifisenhaService } from '../trocarwifisenha.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Find_by_mac } from '../find_by_mac.model';
import { MatDialog } from '@angular/material/dialog';
import { TrocarwifisenhamodalComponent } from '../trocarwifisenhamodal/trocarwifisenhamodal.component';
import { TrocarwifisenhaSshresult } from '../trocarwifisenha-sshresult.model';

@Component({
  selector: 'app-trocarwifisenharead',
  templateUrl: './trocarwifisenharead.component.html',
  styleUrls: ['./trocarwifisenharead.component.scss']
})
export class TrocarwifisenhareadComponent {
  enviandoDados: boolean = false; 
  mostrarFormulario: boolean = false;

  trocarwifisenhaValido(): boolean {
    const wifi: string = this.trocarwifisenha.wifi as string;
    const senhawifi: string = this.trocarwifisenha.senhawifi as string;
  
    // Verifica se os campos wifi e senhawifi têm pelo menos 8 caracteres
    // e se senhawifi contém apenas letras maiúsculas, minúsculas e números
    if (wifi && senhawifi && wifi.length > 0 && senhawifi.length >= 8 && /^[a-zA-Z0-9]+$/.test(senhawifi)) {
      return true;
    } else {
      return false;
    }
  }


  trocarwifisenha: Trocarwifisenha = {
    id: 0,
    hostname: "",
    mac: "",
    wifi: "",
    senhawifi: "",
    olt: "",
    idPort: "",
    posicaoCompleta: "",
    

}

find_by_mac: Find_by_mac = {
  olt: "",
  serial: "",
  idPort: "",
  posicaoCompleta: "",
  hostname: "",
  mac: ""

}

trocarwifisenhaSshresult: TrocarwifisenhaSshresult = {
  mac: "",
  wifi: "",
  senhawifi: "",
  sshResults: "",
  message: "",
}

constructor(private service: TrocarwifisenhaService, 
  private route: ActivatedRoute, private dialog: MatDialog,
  private router: Router) {}

ngOnInit(): void {
  
}

pesquisar(): void {
  this.service.pesquisar(this.find_by_mac.mac.toString()).subscribe((resposta) => {
   this.find_by_mac = resposta     // -------- dessa jeito apareceu os dados após clicae deletar
   this.mostrarFormulario = true;
    console.log(this.find_by_mac)
  }, err => {
    this.service.mensagem("Validar se todos os campos estão preenchidos corretamente!")
});
}




executar(): void {
  this.enviandoDados = true; // Ativa a barra de progresso
  
  // Código para executar a ação


  const trocarwifisenhaa = {
    mac: this.find_by_mac.mac,
    wifi: this.trocarwifisenha.wifi,
    senhawifi: this.trocarwifisenha.senhawifi,
    olt: this.find_by_mac.olt,
    idPort: this.find_by_mac.idPort,
    posicaoCompleta: this.find_by_mac.posicaoCompleta,
    hostname:this.find_by_mac.hostname,
  };

 
  console.log(trocarwifisenhaa)
  this.service.executar(trocarwifisenhaa).subscribe((resposta: TrocarwifisenhaSshresult) => {
    this.trocarwifisenhaSshresult = resposta;
    this.enviandoDados = false;

    const dialogRef = this.dialog.open(TrocarwifisenhamodalComponent, {
      
      width: '70%',
      data: this.trocarwifisenhaSshresult
    });
  
    console.log(this.trocarwifisenhaSshresult)
}, err => {
  this.service.mensagem("Validar se todos os campos estão preenchidos corretamente!")
  this.enviandoDados = false; // Desativa a barra de progresso em caso de erro
  // Lógica para lidar com erros
});


}
}




