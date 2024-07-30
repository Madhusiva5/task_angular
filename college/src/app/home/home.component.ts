import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
   img1=" https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.cnbc.com%2Fselect%2Fcommon-financial-mistakes-college-students-make%2F&psig=AOvVaw0VGuf8Fyj6ET3eC-OUijGe&ust=1722240698147000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCMjridukyYcDFQAAAAAdAAAAABAE"
  images = [
    { src: 'https://wallpapercave.com/wp/wp2468658.jpg', alt: 'Image 1' },
    { src: 'https://wallpapercave.com/wp/wp2468660.jpg', alt: 'Image 2' },
    { src: 'https://th.bing.com/th/id/OIP.kWmLdxNbkVUbq039SN_maQHaEo?w=264&h=180&c=7&r=0&o=5&pid=1.7', alt: 'Image 3' },
    { src: 'https://th.bing.com/th/id/OIP.fv7-TEdyp5HrGs-mM3dmkwHaE8?w=257&h=180&c=7&r=0&o=5&pid=1.7', alt: 'Image 4' },
    { src: 'assets/image5.jpg', alt: 'Image 5' }
  ];
}
