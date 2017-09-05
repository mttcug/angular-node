/**
 * Created by Administrator on 2017/4/17 0017.
 */
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from '../../component/index/index.component';

export const routes: Routes = [
  {
    path: 'home',
    component: IndexComponent
  }
];
export const routing = RouterModule.forChild(routes);
