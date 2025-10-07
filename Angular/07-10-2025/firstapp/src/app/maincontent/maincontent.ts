import { Component } from '@angular/core';

@Component({
  selector: 'app-maincontent',
  standalone: false,
  templateUrl: './maincontent.html',
  styleUrl: './maincontent.css',
})
export class Maincontent {
  count: any = 0;

  increase() {
    this.count++;
  }

  decrease() {
    this.count--;
  }
}
