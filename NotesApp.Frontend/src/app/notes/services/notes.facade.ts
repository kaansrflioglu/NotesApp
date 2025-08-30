import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Note } from '../models/note.model';
import { NoteService } from './note.service';

@Injectable({ providedIn: 'root' })
export class NotesFacade {
  private notesSubject = new BehaviorSubject<Note[]>([]);
  notes$ = this.notesSubject.asObservable();

  constructor(private noteService: NoteService) { }

  loadNotes() {
    this.noteService.getNotes().subscribe(notes => this.notesSubject.next(notes));
  }

  addNote(note: Note) {
    this.noteService.addNote(note).subscribe(added => {
      this.notesSubject.next([...this.notesSubject.value, added]);
    });
  }

  updateNote(note: Note) {
    if (!note) return;

    this.noteService.updateNote(note).subscribe(updated => {
      const updatedNote = updated ?? note;
      const notes = this.notesSubject.value.map(n =>
        n.id === updatedNote.id ? updatedNote : n
      );
      this.notesSubject.next(notes);
    });
  }

  deleteNote(id: number) {
    this.noteService.deleteNote(id).subscribe(() => {
      this.notesSubject.next(this.notesSubject.value.filter(n => n.id !== id));
    });
  }
}