import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

import { routing} from './todo.routes';

import { TodoComponent } from '../../component/todo/todo.component';
import { TodoBodyComponent } from '../../component/todo-body/todo-body.component';
import { TodoFooterComponent } from '../../component/todo-footer/todo-footer.component';
import { TodoHeaderComponent } from '../../component/todo-header/todo-header.component';
import { TodoService } from '../../service/todo/todo.service';
import { InMemoryDataService } from '../../service/dataService/in-memory-data.service';

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
