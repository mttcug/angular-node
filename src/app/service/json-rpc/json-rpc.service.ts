import { Injectable } from '@angular/core';

@Injectable()
export class JsonRpcService {

  constructor() {
  }

  guid() {
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
      s4() + '-' + s4() + s4() + s4();
  }

  configuration={
    rpcUrl:"http://127.0.0.1:8080/api/user/",
    id:this.guid(),
    jsonrpc:"2.0"
  }
}

