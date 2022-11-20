import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthServiceService } from "../auth-service.service";

@Injectable({
    providedIn: 'root'
})

export class LoginAuthGuards implements CanActivate{
    constructor(private auth:AuthServiceService,private route:Router) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        if(this.auth.isLoggedIn()) {
            return true;
        }
        this.route.navigate(['/login']);
        return false;
    }

}