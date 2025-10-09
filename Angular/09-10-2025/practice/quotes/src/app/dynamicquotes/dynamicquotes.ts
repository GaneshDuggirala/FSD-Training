import { Component } from '@angular/core';

@Component({
  selector: 'app-dynamicquotes',
  standalone: false,
  templateUrl: './dynamicquotes.html',
  styleUrl: './dynamicquotes.css',
})
export class Dynamicquotes {
  random=0;
  quotes = [
    "Believe you can and you're halfway there.",
    'Success is not final, failure is not fatal: it is the courage to continue that counts.',
    'Don’t watch the clock; do what it does. Keep going.',
    'The harder you work for something, the greater you’ll feel when you achieve it.',
    'Dream bigger. Do bigger.',
    'Push yourself, because no one else is going to do it for you.',
    'Great things never come from comfort zones.',
    'Wake up with determination. Go to bed with satisfaction.',
    'Do something today that your future self will thank you for.',
    'Little things make big days.',
    'It’s going to be hard, but hard does not mean impossible.',
    'Don’t limit your challenges. Challenge your limits.',
    'Sometimes we’re tested not to show our weaknesses, but to discover our strengths.',
    'The key to success is to focus on goals, not obstacles.',
    'Dream it. Wish it. Do it.',
    'Don’t stop when you’re tired. Stop when you’re done.',
    'If you want to achieve greatness, stop asking for permission.',
    'Discipline is the bridge between goals and accomplishment.',
    'Your limitation—it’s only your imagination.',
    'Success doesn’t just find you. You have to go out and get it.',
  ];
  randomQuote=this.quotes[0];

  getRandom() {
    this.random = Math.round(Math.random()*(this.quotes.length-1))
    this.randomQuote=this.quotes[this.random]
  }
}
