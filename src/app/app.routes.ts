/**
 * Created by Administrator on 2017/4/7 0007.
 */
import {Routes,RouterModule} from '@angular/router';
import {LoginComponent } from './login/login.component';


export const routes:Routes=[
  {
    path:'',
    redirectTo:'login',
    pathMatch:'full'
  },
  {
    path:'todo',
    redirectTo:'todo'
  },
  {
    path:'login',
    component:LoginComponent
  }
]
export const routing = RouterModule.forRoot(routes);
