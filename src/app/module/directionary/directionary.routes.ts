/**
 * Created by Administrator on 2017/4/17 0017.
 */
import { Routes, RouterModule } from '@angular/router';
import { DirectionaryComponent } from '../../component/directionary/directionary.component';

export const routes: Routes = [
  {
    path: 'directionary',
    component: DirectionaryComponent
  }
];
export const routing = RouterModule.forChild(routes);
