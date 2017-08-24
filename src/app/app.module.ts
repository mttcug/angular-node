import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule,Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
//组建
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
//服务
import { AuthService } from './service/core/auth.service';
import { JsonRpcService } from './service/json-rpc/json-rpc.service';
import { HttpService } from './service/request/http.service';
//路由
import { routing } from './app.routes';
//自定义模块
import { TodoModule } from './module/todo/todo.module';
import { HomeModule } from './module/home/home.module';

import { RegisterComponent } from './component/register/register.component';
import { RetrievePasswordComponent } from './component/retrieve-password/retrieve-password.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    RetrievePasswordComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    TodoModule,
    HomeModule,
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
