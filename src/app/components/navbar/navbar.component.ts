import { Component, OnInit } from '@angular/core';
import { AuthserviceService } from 'src/app/service/authservice.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isopen:boolean=false;
  isuser:boolean=false;
  constructor(private as:AuthserviceService) { }

  ngOnInit(): void {
    this.as.user.subscribe(user=>{
      if(user){
        this.isuser=true;
        this.as.userid=user.uid;
      }
      else  {
      this.isuser=false;
      this.as.userid=''
    }
    })
  }

  togglefunc()
  {
    this.isopen = !this.isopen;
  }

  logout()
  {
    this.as.logout().then(()=>console.log('out'));
  }
}
