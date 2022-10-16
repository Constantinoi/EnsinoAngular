import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-bing',
  templateUrl: './data-bing.component.html',
  styleUrls: ['./data-bing.component.scss']
})
export class DataBingComponent implements OnInit {

  public nome :string = "Constantino";
  public idade:number = 28;

  constructor() { }

  ngOnInit(): void {
  }

}
