import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Authentication } from '../authentication.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public auth: Authentication = {};  
  

  public onSubmit(){
    console.log(this.auth);
    if(this.auth.username === 'kevin' && this.auth.password === '123456'){
      alert('Usuario correcto');
      this.router.navigate(['homepage']);
      
    }else{
      alert('Usuario/pass incorrectos');
    }
  }

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
