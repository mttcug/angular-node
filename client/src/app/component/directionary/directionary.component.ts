import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

import { Md5 } from 'ts-md5/dist/md5';

@Component({
  selector: 'app-directionary',
  templateUrl: './directionary.component.html',
  styleUrls: ['./directionary.component.css']
})
export class DirectionaryComponent implements OnInit {

  constructor(private _http: Http) {
    console.log("12",Md5.hashStr("12"));
  }

  ngOnInit() {
  }

  searchWord = '';
  appKey ="44d7090013a253da";
  query = "good";
  salt = (Math.random()*10).toString();
  from = "EN";
  to = "zh-CHS";
  myKey="3rnbNypDpuG9iteJZ8CjzxKdpl2iPkDB";

  params={
    appKey:this.appKey,
    q:this.searchWord,
    from:this.from,
    to:this.to,
    salt:this.salt,
    sign:Md5.hashStr(this.appKey+this.searchWord+this.salt+this.myKey)
  }

  searchDirectionary (){
   console.log("directionary",this.params);
    var searchRequest=this._http.get("https://openapi.youdao.com/api",this.params).toPromise();
    searchRequest.then((result)=>{
      console.log("result",result);
    })
  }

}
