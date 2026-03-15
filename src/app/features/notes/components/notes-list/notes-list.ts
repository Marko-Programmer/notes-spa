import { Component, inject, signal } from '@angular/core';
import { NoteService } from '../../../..//core/services/note';
import { DatePipe } from '@angular/common'; 
import { RouterLink } from '@angular/router';
import { TitlecutterPipe } from '../../../../shared/pipes/titlecutter-pipe'; 
import { appPriorityHighlight } from '../../../../shared/directives/apppriorityhighlight';

@Component({
  selector: 'app-notes-list',
  imports: [DatePipe, RouterLink, TitlecutterPipe, appPriorityHighlight],
  templateUrl: './notes-list.html',
  styleUrl: './notes-list.scss',
})
export class NotesList {

    noteService= inject(NoteService);


    notes = signal(this.noteService.getNotes());
 

deleteNote(id: number) { 
  const confirmed = confirm('Are you sure you want to delete this note?');

  if (confirmed) {
    this.noteService.deleteNote(id);
     
    const updatedNotes = this.noteService.getNotes();
    this.notes.set(updatedNotes); 
  }
}
}