import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthserviceService } from 'src/app/service/authservice.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private as:AuthserviceService,private router:Router) { }

  ngOnInit(): void {
  }

  login(form)
  {
    let data=form.value;
    this.as.login(data.email,data.password).then(()=>
    {
      this.router.navigate(['/']);
    }).catch(error=>console.log(error))

  }

}
