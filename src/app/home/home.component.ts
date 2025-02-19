import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {




  data:any;

  ngOnInit() {
    fetch('https://fakestoreapi.com/products/categories')
      .then(response => response.json())
      .then(result => {
        this.data = result;  // Assuming `data` is a variable in your component to store the response
      })
      .catch(error => {
        console.error('Error fetching data:', error); // Handle any errors that might occur
      });
  }
}