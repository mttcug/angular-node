import { Injectable ,Inject} from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class HttpService {

  constructor(@Inject('config') private config,private http:Http) {
  }

  httpService(method,params){
    return this.http.post(this.config.configuration.rpcUrl,{
      id:this.config.configuration.id,
      jsonrpc:this.config.configuration.jsonrpc,
      method: method,
      params: params
    }).toPromise();
  }

}

