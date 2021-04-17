import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/interfaces/item';
import { CartService } from 'src/app/service/cart.service';
import { ItemService } from 'src/app/service/item.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  item:Item[]=[];
  add:number=-1;

 constructor(private ps:ItemService,private cart:CartService) { }

  ngOnInit(): void {
    this.ps.getAllItem().subscribe(data=>this.item=data);
  }

  addtocaert(index:number)
  {
     this.add=+index;
  }

  buy(amount:number)
  {
    let selecteditem=this.item[this.add];
    let data={
      name:selecteditem.name,
      price:selecteditem.price,
      amount:+amount
    }
    this.cart.addtocart(data).then(
      ()=>this.add=-1
    )
  }
}
