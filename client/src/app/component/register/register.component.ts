import { Component, OnInit , Inject} from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

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
