import { Injectable } from '@angular/core';
import { Headers,Http,Response  } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { todoList,TODOLISTS } from './todo';
@Injectable()
export class TodoService {

  constructor( private http:Http ) { }
  private api_url = 'api/todoLists';

  getToDoItems():Promise<todoList[]> {
    return this.http.get(this.api_url)
      .toPromise()
      .then(r=> r.json().data as todoList[]); //BLOGS;
  }


}
