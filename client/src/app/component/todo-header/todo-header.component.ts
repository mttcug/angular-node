import { Component, OnInit, Input, Output, EventEmitter, ElementRef } from '@angular/core';
import {Observable} from 'rxjs/Rx';
import 'rxjs/Observable';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

@Component({
  selector: 'app-todo-header',
  templateUrl: './todo-header.component.html',
  styleUrls: ['./todo-header.component.css']
})
export class TodoHeaderComponent implements OnInit {
  inputValue: string = '';
  @Input() placeholder: string = 'What needs to be done?';
  @Input() delay: number = 300;

  //detect the input value and output this to parent
@Output() textChanges = new EventEmitter<string>();
  //detect the enter keyup event and output this to parent
@Output() enterUp = new EventEmitter<string>();

  constructor(private elementRef: ElementRef) {
    const event$ = Observable.fromEvent(elementRef.nativeElement, 'keyup')
      .map(() => this.inputValue)
      .debounceTime(this.delay)
      .distinctUntilChanged();
    event$.subscribe(input => this.textChanges.emit(input));
  }
  ngOnInit() {
  }
  fireEnterUp(value){
    console.log("input:",value);
    this.enterUp.emit(value);
    this.inputValue = '';
  }
}
