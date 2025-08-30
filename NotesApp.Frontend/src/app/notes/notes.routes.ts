import { Routes } from '@angular/router';

export const NOTES_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./components/note-list/note-list.component').then(m => m.NoteListComponent)
  },
  {
    path: 'new',
    loadComponent: () =>
      import('./components/note-form/note-form.component').then(m => m.NoteFormComponent)
  },
  {
    path: 'edit/:id',
    loadComponent: () =>
      import('./components/note-edit/note-edit.component').then(m => m.NoteEditComponent)
  }
];