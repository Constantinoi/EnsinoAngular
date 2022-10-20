import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-output-component',
  templateUrl: './output-component.component.html',
  styleUrls: ['./output-component.component.scss']
})
export class OutputComponentComponent implements OnInit {

  @Output() public enviarDados = new EventEmitter();

  public list: Array<{ nome: string, idade: number }> =
    [
      { nome: "Consta", idade: 12 },
      { nome: "Fabiano", idade: 18 },
      { nome: "Barreto", idade: 30 }
    ]

  constructor() { }

  ngOnInit(): void {
  }

  public getDados(event: number) {
    this.enviarDados.emit(this.list[event]);
    console.log(this.list[event]);
  }

}
