import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NotesFacade } from '../../services/notes.facade';
import { Note } from '../../models/note.model';

@Component({
  selector: 'app-note-edit',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './note-edit.component.html',
  styleUrls: ['./note-edit.component.css']
})
export class NoteEditComponent {
  @Input() noteToEdit: Note | null = null;
  @Output() closed = new EventEmitter<void>();

  constructor(private facade: NotesFacade) {}

  updateNote() {
    if (!this.noteToEdit?.title || !this.noteToEdit?.content) return;
    if (!confirm('Are you sure you want to update?')) return;

    this.facade.updateNote(this.noteToEdit);
    this.closed.emit();
  }

  closeModal() {
    this.closed.emit();
  }
}