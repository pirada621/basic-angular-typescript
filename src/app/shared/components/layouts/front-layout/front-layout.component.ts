import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FooterComponent } from '../../footer/footer/footer.component';

@Component({
  selector: 'app-front-layout',
  imports: [RouterLink, RouterOutlet, FooterComponent],
  templateUrl: './front-layout.component.html',
  styleUrl: './front-layout.component.css'
})
export class FrontLayoutComponent {}
