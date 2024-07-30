import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-track-application',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './track-application.component.html',
  styleUrl: './track-application.component.css'
})
export class TrackApplicationComponent {
  onSubmit(form: any) {
    console.log('Form Submitted!', form);
  }
}
