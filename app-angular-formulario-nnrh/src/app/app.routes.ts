import { Routes } from '@angular/router';
import { StudentNewPage } from './pages/student-new-page/student-new-page';
import { StudentListPage } from './pages/student-list-page/student-list-page';

export const routes: Routes = [

  { path: 'students',     component: StudentListPage },
  { path: 'students/new', component: StudentNewPage  },
  { path: '', redirectTo: 'students', pathMatch: 'full' },

];
