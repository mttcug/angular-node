import { Component, OnInit ,Inject} from '@angular/core';
import { Router} from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username='';
  password='';

  constructor(@Inject('auth') private service, private router: Router) { }

  ngOnInit() {
  }

onSubmit(formValue){
  console.log("in",this.service);

  var access=this.service.loginWithCredentials(formValue.username,formValue.password);
/*
    this.router.navigate(['./ById', {id: id}]);
*/

  if(access){
    this.router.navigate(['/todo']);
  }
};

}
