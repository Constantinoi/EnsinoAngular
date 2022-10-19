import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewComponetComponent } from './new-componet/new-componet.component';



@NgModule({
  declarations: [
    NewComponetComponent
  ],
  exports:[
    NewComponetComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
