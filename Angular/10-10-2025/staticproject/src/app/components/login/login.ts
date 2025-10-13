import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  repwd: any;
  loginForm: FormGroup = new FormGroup('');
  constructor(private fb: FormBuilder) {
    this.loginForm = fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  checkLogin() {
    this.repwd = this.loginForm.value.username.slice(0, 3) + '@123';

    if (this.repwd == this.loginForm.value.password) {
      alert('Success');
    } else {
      alert('Failed');
    }
  }
}
