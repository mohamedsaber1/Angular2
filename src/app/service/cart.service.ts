import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Item } from '../interfaces/item';
import { User } from '../interfaces/user';
import { AuthserviceService } from './authservice.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private fs:AngularFirestore,private as :AuthserviceService) { }

  addtocart(data:Item)
  {
    return this.fs.collection<User>('users').doc(this.as.userid).collection('cart').add(data);
  }

  getcart()
  {
    return this.fs.collection<User>('users').doc(this.as.userid).collection('cart').snapshotChanges()
  }

  delete(id)
  {
    return this.fs. collection<User>('users').doc(this.as.userid).collection('cart').doc(id).delete();
  }
  save(id,amount)
  {
    return this.fs.collection<User>('users').doc(this.as.userid).collection('cart').doc(id).update({amount})
  }
}
