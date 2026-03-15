import { Injectable } from '@angular/core';
import { Note, Priority } from '../models/note/note-model'; 

@Injectable({
  providedIn: 'root',
})
export class NoteService {


    private storageKey = 'notes_data';
 

    saveToStorage(notes: Note[]) {
        localStorage.setItem(this.storageKey, JSON.stringify(notes));
    }
 

    getNotes() {
        const data = localStorage.getItem(this.storageKey);
        return data ? JSON.parse(data) : [];
    }


    getNoteById(id: number) {
        const notes = this.getNotes();
        return notes.find((note: Note) => note.id === id);
    }


createNote(noteData: any) {
  const notes = this.getNotes();
 
  const ids = notes
    .map((n: Note) => Number(n.id))  
    .filter((id: number) => !isNaN(id)); 

  const maxId = ids.length > 0 ? Math.max(...ids) : 0;

  const newNote: Note = {
    ...noteData,
    id: maxId + 1,
    createdAt: new Date()
  };

  notes.push(newNote);
  this.saveToStorage(notes);
}


updateNote(updatedNote: Note): void { 
  const notes = this.getNotes();
   
  const index = notes.findIndex((n : Note) => n.id === updatedNote.id);

  if (index !== -1) { 
    notes[index] = { 
      ...notes[index], 
      ...updatedNote 
    };
 
    this.saveToStorage(notes);
  }
}


    deleteNote(id: number) : void {
        const notes = this.getNotes();
        const updatedNotes = notes.filter((note: Note) => note.id !== id);
        this.saveToStorage(updatedNotes);
    } 

}