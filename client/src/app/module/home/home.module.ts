import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from '../../component/index/index.component';


import { routing} from './home.routes';

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [
    IndexComponent
  ]
})
export class HomeModule { }
