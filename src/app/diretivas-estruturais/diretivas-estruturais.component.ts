import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-estruturais',
  templateUrl: './diretivas-estruturais.component.html',
  styleUrls: ['./diretivas-estruturais.component.scss']
})
export class DiretivasEstruturaisComponent implements OnInit {

  public condicao: boolean = true;
  public condicaoClick: boolean = true;
  
  constructor() { }

  ngOnInit(): void {

    setInterval(() => {
      if(this.condicao){
        this.condicao = false;
      }else{
        this.condicao = true;
      }

    }, 2000)

  }

  public cliquei(){
    if(this.condicaoClick){
      this.condicaoClick = false;
    }else{
      this.condicaoClick = true;
    }
  }
}
