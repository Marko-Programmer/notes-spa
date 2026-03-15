import { Component, inject, OnInit } from '@angular/core';
import { NoteService } from '../../../../core/services/note';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';  
import { FormGroup, Validators, FormBuilder, ReactiveFormsModule} from '@angular/forms';  

@Component({
  selector: 'app-note-form',
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './note-form.html',
  styleUrl: './note-form.scss',
})
export class NoteForm implements OnInit {

    private noteService = inject(NoteService);
    private route = inject(ActivatedRoute);
    private router = inject(Router); 
    private fb = inject(FormBuilder); 

    noteForm!: FormGroup; 
    status: 'create' | 'edit' = 'create';
    noteId: number | null = null;

ngOnInit() { 
  this.noteForm = this.fb.group({
    title: ['', Validators.required],
    content: ['', Validators.required],
    priority: ['low']
  });

  const idParam = this.route.snapshot.paramMap.get('id');
  if (idParam) {
    this.status = 'edit';
    this.noteId = Number(idParam);
     
    const note = this.noteService.getNoteById(this.noteId);
    
    if (note) { 
      this.noteForm.patchValue(note); 
    }
  }
}
 
  onSubmit() {
    if (this.noteForm.valid) {
      const noteData = this.noteForm.value;

      if (this.status === 'create') {
        this.noteService.createNote(noteData);
      } else { 
       this.noteService.updateNote({ ...noteData, id: this.noteId });
      }

      this.router.navigate(['/notes']);
    }
  }

}