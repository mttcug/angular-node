import { Component, OnInit ,Inject} from '@angular/core';
import {TodoHeaderComponent } from './todo-header/todo-header.component';
import {TodoBodyComponent } from './todo-body/todo-body.component';
import {TodoFooterComponent } from './todo-footer/todo-footer.component';
import {todoList} from './todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todoList:todoList[]=[];

  constructor(@Inject('todoService')  private service) {
    var  _this=this;
    this.service.getToDoItems().then(function(result){
      _this.todoList=result;
    });
  }

  ngOnInit() {
  }

  addTodo(){

  }

  onTextChanges(value) {
   /* this.desc = value;*/
  }

}
