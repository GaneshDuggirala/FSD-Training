import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { Activities } from '../../../services/activities';

@Component({
  selector: 'app-addactivity',
  standalone: false,
  templateUrl: './addactivity.html',
  styleUrl: './addactivity.css',
})
export class Addactivity {
  activityform!: FormGroup;

  constructor(private fb: FormBuilder, private activity: Activities) {
    this.activityform = this.fb.group({
      id: [''],
      city: [''],
      name: [''],
      price: [''],
      image: [''],
      gallery: this.fb.array([]), // ✅ form array
      description: [''],
      rating: [''],
      category: [''],
    });
  }

  // ✅ Getter for easy access
  get galleryarr(): FormArray {
    return this.activityform.get('gallery') as FormArray;
  }

  addGallery() {
    this.galleryarr.push(this.fb.control(''));
  }

  removeGallery(index: number) {
    this.galleryarr.removeAt(index);
  }

  res: any;
  submitActivity() {
    console.log(this.activityform.value);
    this.res = this.activity.addActivity(this.activityform.value);
    alert('Activity added successfully!');
  }
}
