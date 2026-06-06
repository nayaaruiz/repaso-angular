import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-student-new-page',
  imports: [ReactiveFormsModule, RouterLink ],
  templateUrl: './student-new-page.html',
  styleUrl: './student-new-page.css',
})
export class StudentNewPage {

  studentForm = new FormGroup({
    name: new FormControl('',
      [Validators.required, Validators.minLength(2)]
    ),
    surnames: new FormControl('',
      [Validators.required, Validators.minLength(2)]
    ),
    age: new FormControl<number | null>(null,
      [Validators.required, Validators.min(1)]
    ),
    course: new FormControl('', Validators.required)
  });

  get name() { return this.studentForm.get('name')!; }
  get surnames() { return this.studentForm.get('surnames')!;}
  get age() { return this.studentForm.get('age')!; }
  get course() { return this.studentForm.get('course')!; }

  onSubmit() {
    if (this.studentForm.invalid) {
      this.studentForm.markAllAsTouched();
      return;
    }
    console.log('Nuevo alumno: ', this.studentForm.value);
  }

}
