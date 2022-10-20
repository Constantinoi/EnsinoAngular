import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-component',
  templateUrl: './input-component.component.html',
  styleUrls: ['./input-component.component.scss']
})
export class InputComponentComponent implements OnInit {

  @Input() public contador: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
