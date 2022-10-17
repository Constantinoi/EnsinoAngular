import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-estruturais',
  templateUrl: './diretivas-estruturais.component.html',
  styleUrls: ['./diretivas-estruturais.component.scss']
})
export class DiretivasEstruturaisComponent implements OnInit {

  public list: Array<{ nome: string, idade: number }> = [
    { nome: "consta1", idade: 29 },
    { nome: "consta2", idade: 30 },
    { nome: "consta3", idade: 28 }
  ]

  public nome :string = "Consta";

  public condicao: boolean = true;
  public condicaoClick: boolean = true;

  constructor() { }

  ngOnInit(): void {

    setInterval(() => {
      if (this.condicao) {
        this.condicao = false;
      } else {
        this.condicao = true;
      }

    }, 2000)

  }

  public cliquei() {
    if (this.condicaoClick) {
      this.condicaoClick = false;
    } else {
      this.condicaoClick = true;
    }
  }
  cont: number = 1;
  public clickAdd() {
    this.list.push({ nome: "consta" + this.cont, idade: 30 + this.cont });
    this.cont++
  }

  public onClickEvent(event: number) {
    this.list.splice(event, 1)
  }

}
