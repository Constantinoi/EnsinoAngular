import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!--<app-new-componet></app-new-componet>
 <app-diretivas-atributos>
 <h1>Inicio</h1>
 <h3>Final</h3>
 </app-diretivas-atributos>

  <router-outlet></router-outlet>

  <app-input-component [contador] = "addContador"></app-input-component>
  <br>
  <button (click)="addNum()">ADD</button>

  <hr>

  <ng-template [ngIf]="getDados">
    <h1>{{getDados.nome}}</h1>
    <h2>{{getDados.idade}}</h2>
  </ng-template>

  <app-output-component (enviarDados)="setDados($event)"></app-output-component>-->
    <app-food-add></app-food-add>
    <app-food-list></app-food-list>
  `,
})
export class AppComponent implements OnInit {
  public addContador: number = 12;

  public getDados: { nome: string; idade: number } | undefined;

  constructor() {}

  ngOnInit(): void {}

  public addNum() {
    this.addContador += 1;
  }

  public setDados(event: { nome: string; idade: number }) {
    this.getDados = event;
  }
}
