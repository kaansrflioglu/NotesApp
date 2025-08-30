import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotesFacade } from '../../services/notes.facade';
import { Observable } from 'rxjs';
import { Note } from '../../models/note.model';
import { NoteFormComponent } from '../note-form/note-form.component';
import { NoteEditComponent } from '../note-edit/note-edit.component';

@Component({
  selector: 'app-note-list',
  standalone: true,
  imports: [CommonModule, NoteFormComponent, NoteEditComponent],
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css']
})
export class NoteListComponent implements OnInit {
  notes$!: Observable<Note[]>;
  selectedNote: Note | null = null;

  constructor(private facade: NotesFacade) { }

  ngOnInit() {
    this.notes$ = this.facade.notes$;
    this.facade.loadNotes();
  }

  delete(id: number) {
    if (confirm('Are you sure you want to delete this note?')) {
      this.facade.deleteNote(id);
    }
  }

  edit(note: Note) {
    this.selectedNote = { ...note };
  }

  closeEdit() {
    this.selectedNote = null;
  }
}