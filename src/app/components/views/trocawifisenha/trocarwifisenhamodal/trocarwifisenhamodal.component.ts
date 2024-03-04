import { Component, HostListener, Inject } from '@angular/core';
import { Trocarwifisenha } from '../trocarwifisenha.model';
import { Find_by_mac } from '../find_by_mac.model';
import { TrocarwifisenhaSshresult } from '../trocarwifisenha-sshresult.model';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TrocarwifisenhaService } from '../trocarwifisenha.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trocarwifisenhamodal',
  templateUrl: './trocarwifisenhamodal.component.html',
  styleUrls: ['./trocarwifisenhamodal.component.scss']
})
export class TrocarwifisenhamodalComponent {
  trocarwifisenhaSshresult: { mac: any; wifi: any; senhawifi: any; sshResults: string; message: string; };
  enviandoDados: boolean = false;
  bloquearFecharModal: boolean = true;

  constructor( private router: Router, private service: TrocarwifisenhaService,
    public dialogRef: MatDialogRef<TrocarwifisenhamodalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    dialogRef.disableClose = true;
    this.trocarwifisenhaSshresult = {
      mac: data.mac || '',
      wifi: data.wifi || '',
      senhawifi: data.senhawifi || '',
      sshResults: data.sshResults || '', 
      message: data.message || ''
    };
  }




fecharModal(): void {
  this.dialogRef.close();
  window.location.reload();
}


enviarDados(): void {

      
   
}

}