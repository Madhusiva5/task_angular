import { Component } from '@angular/core';
import { RouterOutlet ,RouterModule} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { GalleryComponent } from './gallery/gallery.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterModule,HomeComponent,AboutComponent,GalleryComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'college';
}
