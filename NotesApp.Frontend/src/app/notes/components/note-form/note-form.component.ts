import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NotesFacade } from '../../services/notes.facade';
import { Note } from '../../models/note.model';

@Component({
  selector: 'app-note-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './note-form.component.html',
  styleUrls: ['./note-form.component.css']
})
export class NoteFormComponent implements OnInit {
  newNote!: Note;

  constructor(private facade: NotesFacade) {}

  ngOnInit() {
    this.resetForm();
  }

  addNote() {
    if (!this.newNote.title || !this.newNote.content) return;
    this.facade.addNote(this.newNote);
    this.resetForm();
  }

  private resetForm() {
    this.newNote = { id: 0, title: '', content: '' };
  }
}