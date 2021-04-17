import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/user';
import { AuthserviceService } from 'src/app/service/authservice.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  errormessage:string=''
  constructor(private router:Router,private us :AuthserviceService,private as:UserService) { }

  ngOnInit(): void {
  }

  signup(form)
  {
    let data :User= form.value;
    this.us.Signup(data.email,data.password).then(
      result=>{
        this.errormessage='';
        this.as.adduser(result.user.uid,data.address,data.name).then(()=>
        {
          this.router.navigate(['/']);
        })
      }
    ).catch(error=>{
      this.errormessage=error.message
    })


  }
}
