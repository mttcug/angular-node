/**
 * Created by Administrator on 2017/4/19 0019.
 */
/*import {InMemoryDbService} from 'angular-in-memory-web-api';
export class  InMemoryDataService{
  constructor() { }
  CreateDb(){
    let heroes=[
      {id:11,name:'Mr Nice'},
      {id:12,name:'Narco'},
      {id:13,name:'Bombasto'},
      {id:14,name:'Celebritas'},
      {id:15,name:'Magneta'},
      {id:16,name:'RubberMan'}
    ];
    return {heroes};
  }
}*/

import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
         let todoLists=[
          { title:"号外号外？奥巴马要下台啦"},
          { title:"什么？奥巴马要下台啦？"},
          { title:"号外号外？川普要上台了"},
          { title:"啥？我大四川人也要当美国总统了？"},
          { title:"mdzz,一群麻瓜，统统查杀"},
          { title:"首推龙文，必须出具"}
       ]
        return {todoLists};
       }
   }
