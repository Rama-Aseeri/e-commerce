import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {


  email:string="iirama.15806@gmail.com";


  count: number=0;

   @Input()setcounter:number=0;


}
