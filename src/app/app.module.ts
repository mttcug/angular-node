import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule,Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
//组建
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
//服务
import { AuthService } from './core/auth.service';
import { JsonRpcService } from './json-rpc/json-rpc.service';
import { HttpService } from './request/http.service';
//路由
import { routing } from './app.routes';
//自定义模块
import { TodoModule } from './todo/todo.module';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    TodoModule,
    NgbModule.forRoot()
  ],
  providers: [
    //登录
    {provide:'auth',useClass:AuthService},
    //json-rpc
    {provide:"jsonRpc",useClass:JsonRpcService},
    //http请求
    {provide:"httpRequest",useClass:HttpService}
  ],
  bootstrap: [AppComponent]

})
export class AppModule { }
