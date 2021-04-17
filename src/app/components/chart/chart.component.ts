import { Component, OnInit, ɵSWITCH_COMPILE_PIPE__POST_R3__ } from '@angular/core';
import { DocumentChangeAction } from '@angular/fire/firestore';
import { Observable, Subscription } from 'rxjs';
import { Shoping } from 'src/app/interfaces/shoping';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
   cart:Shoping[]=[];
   constructor(private ct:CartService) { }

  ngOnInit() {
     this.ct.getcart().subscribe(cart=>{
           this.cart=cart.map(
             shop=>{
               return{
                 id:shop.payload.doc.id,
                 name:shop.payload.doc.data()['name'],
                 price:shop.payload.doc.data()['price'],
                  amount:shop.payload.doc.data()['amount'],
                       }
             })
           console.log(this.cart)
         })

}

delete(index:number)
{
  this.ct.delete(this.cart[index].id);

}

save(index)
{
  this.ct.save(this.cart[index].id,this.cart[index].amount)
}

}
