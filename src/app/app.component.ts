import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template:`
  <!--<app-new-componet></app-new-componet>
 <app-diretivas-atributos>
 <h1>Inicio</h1>
 <h3>Final</h3>
 </app-diretivas-atributos>

  <router-outlet></router-outlet> -->

  <app-input-component [contador] = "addContador"></app-input-component>
  <br>
  <button (click)="addNum()">ADD</button>
  `
})
export class AppComponent implements OnInit{

  public addContador:number = 12;

  constructor(){}

  ngOnInit(): void {
   
  }
  
  public addNum(){
    this.addContador += 1;
  }
}
