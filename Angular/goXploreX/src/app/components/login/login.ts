import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  loginform:FormGroup = new FormGroup("");
  

  constructor(private fb:FormBuilder,private router:Router){
    this.loginform=this.fb.group({
      username:['',Validators.required],
      password:['',Validators.required],
      // userrole :'admin',
    })
  }

  onSubmit(){
    if(this.loginform.value.password == '12345' || this.loginform.value.password == this.loginform.value.username+'@admin'){
      alert("Login Success !!!")
      if(this.loginform.value.password == this.loginform.value.username+'@admin'){
        this.router.navigateByUrl('/dashboard/viewactivity')
        localStorage.setItem("admindetails",JSON.stringify(this.loginform.value))
      }
      else{
        this.router.navigateByUrl('/display/home')
        localStorage.setItem("userdetails",JSON.stringify(this.loginform.value))
      }
    }
    else{
      alert("Login Failed")
    }
  }

}
