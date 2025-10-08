import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  username:any='';
  currentpassword:any='';
  result:any;
  color:any='';
  
  validateForm(){
    if(this.username.length < 3 && this.currentpassword.length < 3){
      console.log(this.username.length)
      alert('Enter Details Properly')
    }
    else{
      if((this.username.slice(0,3)+'@123') == this.currentpassword){
        this.result="Login Success !!!"
        this.color='color: green;'
      }
      else{
        this.result='Login Failed! Try Again!!!'
        this.color='color: red;'
      }
    }
  }
}
