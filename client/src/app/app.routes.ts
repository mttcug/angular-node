/**
 * Created by Administrator on 2017/4/7 0007.
 */
import { Routes,RouterModule} from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { RetrievePasswordComponent } from './component/retrieve-password/retrieve-password.component';




export const routes:Routes=[
  {
    path:'',
    redirectTo:'home',
    pathMatch:'full'
  },
  {
    path:'todo',
    redirectTo:'todo'
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'retrievePassword',
    component:RetrievePasswordComponent
  },
  {
    path:'home',
    redirectTo:'home'
  },
  {
    path:'directionary',
    redirectTo:'directionary'
  }
]
export const routing = RouterModule.forRoot(routes);
