import { Component } from '@angular/core';

@Component({
  selector: 'app-womens-clothing',
  standalone: false,
  templateUrl: './womens-clothing.component.html',
  styleUrl: './womens-clothing.component.css'
})
export class WomensClothingComponent {


  data:any;



  ngOnInit(): void {
    fetch('https://fakestoreapi.com/products/category/women\'s clothing')
      .then(response => response.json())
      .then(result => {
        this.data = result;  // Store API response in `data`
      })
      .catch(error => {
        console.error('Error fetching data:', error); // Handle any errors that might occur
      });
  }

  showDescription(item: any): void {
    item.showDescription = !item.showDescription;
  }

}
