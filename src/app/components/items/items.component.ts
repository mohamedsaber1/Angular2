import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Item } from 'src/app/interfaces/item';
import { ItemService } from 'src/app/service/item.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  @ViewChild('image') image;
  constructor(private itser:ItemService,private router:Router) { }

  ngOnInit(): void {
  }

  additem(form:NgForm)
  {
   let name = (<Item>form.value).name,
       price=(<Item>form.value).price,
       image = (<HTMLInputElement>this.image.nativeElement).files[0];
   this.itser.AddItems(name,price,image);
   this.router.navigate(["/"]);

  }

}
