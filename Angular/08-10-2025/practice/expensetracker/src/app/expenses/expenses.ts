import { Component } from '@angular/core';

@Component({
  selector: 'app-expenses',
  standalone: false,
  templateUrl: './expenses.html',
  styleUrl: './expenses.css',
})
export class Expenses {
  arr: any[] = [];
  expense: any;
  amount: number=0;
  total: number=0;
  strs=''

  expensesubmit() {
    this.strs+= this.expense+' , '
    this.arr.push(this.expense);
    this.total+=this.amount;
  }
}
