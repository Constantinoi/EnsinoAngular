import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template:`
  <app-title title="Ola Mundo" *ngIf="destruir"></app-title>
  {{valor}}
  <button (click)="adicionar()">Adicionar</button>
  <br>
  <button (click)="destruirComponent()") >destruir Component</button>
  <router-outlet></router-outlet>
  `
})
export class AppComponent implements OnInit, DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked {
  public destruir = true;
  public valor:number = 1;

  constructor(){}

  public destruirComponent(){
this.destruir = false;
  }
  

  public adicionar():number{
    return this.valor +=1;
  }

  ngOnInit(): void {
    setTimeout(()=> {
      console.log(1)
    },5000)
  }
  ngDoCheck(): void {
    console.log("ngDoCheck")
  }
  ngAfterContentInit(): void {
    console.log("ngAfterContentInit")
  }
  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked")
  }
  ngAfterViewInit(): void {
    console.log("ngAfterViewInit")
  }
  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked")
  }
}
