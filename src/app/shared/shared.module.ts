import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//Componentes
import { NewComponetComponent } from './new-componet/new-componet.component';
import { InputComponentComponent } from './input-component/input-component.component';
import { OutputComponentComponent } from './output-component/output-component.component';
import { FoodListComponent } from './food-list/food-list.component';
import { FoodAddComponent } from './food-add/food-add.component';

@NgModule({
  declarations: [
    NewComponetComponent,
    InputComponentComponent,
    OutputComponentComponent,
    FoodListComponent,
    FoodAddComponent,
  ],
  exports: [
    NewComponetComponent,
    InputComponentComponent,
    OutputComponentComponent,
    FoodListComponent,
    FoodAddComponent,
  ],
  imports: [CommonModule],
})
export class SharedModule {}
