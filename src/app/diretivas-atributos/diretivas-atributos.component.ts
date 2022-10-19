import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-atributos',
  templateUrl: './diretivas-atributos.component.html',
  styleUrls: ['./diretivas-atributos.component.scss']
})
export class DiretivasAtributosComponent implements OnInit {

  public verifica: boolean = true;
  public altura: string = "20px";
  public cor: string = "silver";
  public nome: string = "";
  public list: Array<{ nome: string }> = [{nome:"consta"}];

  constructor() { }

  ngOnInit(): void {

    setInterval(() => {
      if (this.verifica) {
        this.verifica = false;
      } else {
        this.verifica = true;
      }
      if (this.altura == "20px") {
        this.altura = "50px";
        this.cor = "purple"
      } else {
        this.altura = "20px";
        this.cor = "silver"
      }
    }, 2000)

  }
  public clicar() {
    this.list.push({ nome: this.nome });
    this.nome = "";
  }

}
