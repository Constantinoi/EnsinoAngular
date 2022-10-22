import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewComponetComponent } from './new-componet/new-componet.component';
import { InputComponentComponent } from './input-component/input-component.component';
import { OutputComponentComponent } from './output-component/output-component.component';
import { FoodListComponent } from './food-list/food-list.component';

@NgModule({
  declarations: [
    NewComponetComponent,
    InputComponentComponent,
    OutputComponentComponent,
    FoodListComponent,
  ],
  exports: [
    NewComponetComponent,
    InputComponentComponent,
    OutputComponentComponent,
    FoodListComponent,
  ],
  imports: [CommonModule],
})
export class SharedModule {}
