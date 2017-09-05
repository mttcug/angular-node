/**
 * Created by Administrator on 2017/4/17 0017.
 */
import { Routes, RouterModule } from '@angular/router';
import { TodoComponent } from '../../component/todo/todo.component';

export const routes: Routes = [
  {
    path: 'todo',
    component: TodoComponent
  }
];
export const routing = RouterModule.forChild(routes);
