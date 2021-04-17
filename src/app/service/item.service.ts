import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage  } from '@angular/fire/storage';
import { Item } from '../interfaces/item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private fs:AngularFirestore,private storage:AngularFireStorage) { }
  getAllItem()
  {
   return  this.fs.collection('items').valueChanges();
  }

  AddItems(name:string,price:string,image:File)
  {
   let ref= this.storage.ref('items/' +image.name)
   ref.put(image).then(()=>{
     ref.getDownloadURL().subscribe(photourl=>{
       this.fs.collection('items').add({
         name,
         price,
         photourl
       })
     })
   })
  }





}
