import { Component, input } from '@angular/core';
import { Student } from '../../models/student.interface';

@Component({
  selector: 'app-student-component',
  imports: [],
  templateUrl: './student-component.html',
  styleUrl: './student-component.css',
})
export class StudentComponent {

  student = input.required<Student>();
  //student = input<Student>();
  
  verDetalle() {
    alert(`Detalle del estudiante: ${this.student().name}`);
  }
}