import { Component, OnInit ,Inject} from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username='';
  password='';

  constructor(@Inject('auth') private service) { }

  ngOnInit() {
  }

onSubmit(formValue){
  this.service.loginWithCredentials(formValue.username,formValue.password).then(function(){
   /* this.router.navigate(['./ById', {id: id}]);*/
  });
};

}
