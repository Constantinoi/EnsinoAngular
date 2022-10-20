import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewComponetComponent } from './new-componet/new-componet.component';
import { InputComponentComponent } from './input-component/input-component.component';



@NgModule({
  declarations: [
    NewComponetComponent,
    InputComponentComponent
  ],
  exports:[
    NewComponetComponent,
    InputComponentComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
