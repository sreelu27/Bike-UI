import {CanActivate} from "@angular/router";
import {AuthService} from './auth.service';
import { Injectable } from "@angular/core";

@Injectable()
export class AuthGuard implements CanActivate{

    constructor(private authService: AuthService){

    }

    canActivate(){
        if(this.authService.isAuthenticated()){
            return true;
        }else{
            this.authService.login();
        }
    }
}