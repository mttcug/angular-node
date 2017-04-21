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
    _this.service.getToDoItems().then(function(result){
      _this.todoList=result;
    });
  }

  ngOnInit() {
  }

  addTodo($event){
    var newToDoItem={title:""};
    newToDoItem.title=$event;
    this.todoList.push(newToDoItem);
    console.log("newTodoLits:",this.todoList);
  }

  onTextChanges(value) {
  }

  /*列表*/
  removeToDoItem($event){
/*    todoList.forEach(function(index,item){
      if(item.title==$event.title){
        /!*todoList.splice(index,1);*!/
      }
    });*/

    for(let i=0;i<(this.todoList).length;i++){
      if($event.title==this.todoList[i].title){
        this.todoList.splice(i,1);
      }
    }
  }

}
