import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginpage',
  standalone: false,
  templateUrl: './loginpage.html',
  styleUrl: './loginpage.css',
})
export class Loginpage {
  productform: FormGroup = new FormGroup('');

  constructor(private fb: FormBuilder,private router:Router) {
    this.productform = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  checkLogin() {
    if(this.productform.value.username== '' || this.productform.value.password== ''){
      return alert('Enter Details Properly!!!')
    }
    if (this.productform.value.password == '12345') {
      alert('Login Success!!!')
      this.router.navigateByUrl('/dashboard/view')
      localStorage.setItem("loggedin",JSON.stringify(this.productform.value))
    }
    else{
      alert('Login Failed!!!')
    }
  }
}
