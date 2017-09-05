import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DirectionaryComponent } from '../../component/directionary/directionary.component';

import { routing} from './directionary.routes';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    routing
  ],
  declarations: [
    DirectionaryComponent
  ]
})
export class DirectionaryModule { }
