import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable, observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {
user:Observable<firebase.default.User>;
userid:string='';
  constructor(private fauth:AngularFireAuth) {
  this.user = fauth.user
   }

Signup(email,password)
{
 return this.fauth.createUserWithEmailAndPassword(email,password)
}
login(email,password)
{
  return this.fauth.signInWithEmailAndPassword(email,password)
}

logout()
{
  return this.fauth.signOut();
}

}
