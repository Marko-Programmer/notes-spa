import { Routes } from '@angular/router';

export const routes: Routes = [
{
    path: '', redirectTo: '/notes', pathMatch: 'full'
  },
  {
    path: 'notes', 
    loadChildren: () => import('./features/notes/notes-module').then(m => m.NotesModule)
 } 
];
