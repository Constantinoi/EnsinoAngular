import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template:`
 <app-diretivas-atributos>
 <h1>Inicio</h1>
 <h3>Final</h3>
 </app-diretivas-atributos>

  <router-outlet></router-outlet>
  `
})
export class AppComponent implements OnInit{

  constructor(){}

  ngOnInit(): void {
   
  }
  
}
