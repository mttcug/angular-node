import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {todoList } from '../todo/todo';

@Component({
  selector: 'app-todo-body',
  templateUrl: './todo-body.component.html',
  styleUrls: ['./todo-body.component.css']
})
export class TodoBodyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() todoLists:todoList[]=[];
  @Output() removeItem=new EventEmitter<any>();
  @Output() chooseItem=new  EventEmitter<any>();

  fireChoosedItem(item:todoList){
    this.chooseItem.emit(item);
  }

  fireRemoveItem(item:todoList){
    this.removeItem.emit(item);
    console.log("removeItem:",item);
  }
}
