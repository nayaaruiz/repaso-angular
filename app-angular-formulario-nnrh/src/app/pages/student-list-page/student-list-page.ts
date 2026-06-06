import { Component } from '@angular/core';
import { Student } from '../../models/student.interface';
import { StudentComponent } from "../../components/student-component/student-component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-student-list-page',
  imports: [StudentComponent, RouterLink],
  templateUrl: './student-list-page.html',
  styleUrl: './student-list-page.css',
})
export class StudentListPage {

  students: Student[] = [
    {
      id: 1,
      name: 'Miguel',
      surnames: 'Campos Rivera',
      age: 40,
      course: '1º DAM'
    },
    {
      id: 2,
      name: 'Luis Miguel',
      surnames: 'López Magaña',
      age: 42,
      course: '2º DAM'
    },
    {
      id: 2,
      name: 'Ángel',
      surnames: 'Naranjo González',
      age: 48,
      course: '2º DAM'
    },
  ];

}
