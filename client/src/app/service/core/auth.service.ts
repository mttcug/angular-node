import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AuthService {

  constructor() { }

  loginWithCredentials(username : string, password : string):boolean{
    if(username === 'ann'&& password=="676992")
      return true;
    return false;
  }
}
