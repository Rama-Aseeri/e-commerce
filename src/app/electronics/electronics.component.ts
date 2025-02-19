import { Component } from '@angular/core';


@Component({
  selector: 'app-electronics',
  standalone: false,
  templateUrl: './electronics.component.html',
  styleUrl: './electronics.component.css'
})



export class ElectronicsComponent {
  data: any[] = []; // Stores the data fetched from the API


  

  ngOnInit(): void {
    // Fetch products from the API
    fetch('https://fakestoreapi.com/products/category/electronics')
      .then(response => response.json())
      .then(result => {
        this.data = result;  // Assign fetched data to 'data' property
      })
      .catch(error => console.error('Error:', error));
  }

  
  

    showDescription(item: any): void {
      item.showDescription = !item.showDescription; // Toggle visibility
    }
}



