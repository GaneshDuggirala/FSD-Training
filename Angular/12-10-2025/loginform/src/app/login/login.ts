import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  allStudents: any[] = [];

  student: any = {
    sId: '',
    sName: '',
    sMarks: '',
    sPhone: '',
  };

  validateUser() {
    this.allStudents.push(this.student);
    // console.log(this.allStudents)
    this.student = {
      sId: '',
      sName: '',
      sMarks: '',
      sPhone: '',
    };
  }
}
