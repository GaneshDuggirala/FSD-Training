import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { Events } from '../../../services/events';

@Component({
  selector: 'app-addevents',
  standalone: false,
  templateUrl: './addevents.html',
  styleUrl: './addevents.css',
})
export class Addevents {
  eventform: FormGroup = new FormGroup('');

  constructor(private fb: FormBuilder, private event: Events) {
    this.eventform = this.fb.group({
      id: '',
      city: '',
      name: '',
      price: '',
      image: '',
      gallery: this.fb.array([]),
      description: '',
      rating: '',
      category: '',
    });
  }

  get galleryarr(): FormArray {
    return this.eventform.get('gallery') as FormArray;
  }

  addGallery(){
    this.galleryarr.push(this.fb.control(''))
  }

  removeGallery(index:number){
    this.galleryarr.removeAt(index);
  }
  
  res: any;
  submitEvent() {
    console.log(this.eventform.value);
    this.eventform.value.gallery = this.eventform.value.gallery.split(' ');
    this.res = this.event.addevent(this.eventform.value);
    alert(this.res);
  }
}
