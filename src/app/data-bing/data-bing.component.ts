import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-bing',
  templateUrl: './data-bing.component.html',
  styleUrls: ['./data-bing.component.scss']
})
export class DataBingComponent implements OnInit {

  public nome :string = "Constantino";
  public idade:number = 28;

  public btnDisable:boolean = true;
  public urlImagem:string = "https://vidafullstack.com.br/wp-content/uploads/2019/08/logo-4.png";
  public dsImagem:string = "vida full Stack"

  public position :{x:number,y:number} = { x:0, y:0};

  public alertaTest(alerta:string){
    alert(alerta);
  }

  public moveMouse(event:MouseEvent){
   this.position.x = event.offsetX;
   this.position.y = event.offsetY;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
