import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthserviceService } from './authservice.service';

@Injectable({
  providedIn: 'root'
})
export class GurdService implements CanActivate{

  constructor(private as:AuthserviceService,private router:Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
   return new Promise(resolve =>{
     this.as.user.subscribe(user=>{
       if(user)resolve(true);
       else{
         this.router.navigate(["/signin"]);
         resolve(false)
       }
     })
   })
  }
}
