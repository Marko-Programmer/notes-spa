import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { RouterModule, Routes } from '@angular/router';  
import { NotesList } from './components/notes-list/notes-list'; 
import { NoteForm } from './components/note-form/note-form';

const routes: Routes = [
    {
        path: '', component: NotesList
    },
    {
        path: 'add', component: NoteForm
    },
    {
        path: 'edit/:id', component: NoteForm
    }
];

@NgModule({
  declarations: [],
  imports: [CommonModule, NotesList, NoteForm, RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
})
export class NotesModule {}
