import { Component } from '@angular/core';

@Component({
  selector: 'app-character',
  standalone: false,
  templateUrl: './character.html',
  styleUrl: './character.css',
})
export class Character {
  strs: any[] = [];
  nstr: any;

  charcount() {
    if(this.strs.length > 100){
      this.nstr = this.strs.length;
      alert('Max Chars Reached')
    }
    else{
      this.nstr = this.strs.length;
    }
  }

}
