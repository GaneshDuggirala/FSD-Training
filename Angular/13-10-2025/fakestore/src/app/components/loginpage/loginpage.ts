import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginpage',
  standalone: false,
  templateUrl: './loginpage.html',
  styleUrl: './loginpage.css'
})
export class Loginpage {
    repwd:any;
    
    loginform:FormGroup = new FormGroup('');

    constructor(private fb:FormBuilder,private rt:Router){
      this.loginform = this.fb.group({
        username :['',Validators.required],
        password :['',Validators.required]
      })
    }

    checkLogin(){
      this.repwd = this.loginform.value.username.slice(0,3)+'@123'
      if(this.repwd == this.loginform.value.password){
        // alert('login success!!!')
        this.rt.navigateByUrl('/products')
      }
      else{
        alert('login failed!!!')
      }
    }
}
