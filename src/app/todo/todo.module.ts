import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { routing} from './todo.routes'

import { TodoComponent } from './todo.component';
import { TodoBodyComponent } from './todo-body/todo-body.component';
import { TodoFooterComponent } from './todo-footer/todo-footer.component';
import { TodoHeaderComponent } from './todo-header/todo-header.component';
import { TodoService } from './todo.service';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    routing,
    InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  declarations: [
    TodoComponent,
    TodoBodyComponent,
    TodoFooterComponent,
    TodoHeaderComponent
  ],
  providers: [
    {provide: 'todoService', useClass: TodoService}
  ]
})
export class TodoModule {}
