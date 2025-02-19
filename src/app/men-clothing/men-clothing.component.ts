import { Component } from '@angular/core';

@Component({
  selector: 'app-men-clothing',
  standalone: false,
  templateUrl: './men-clothing.component.html',
  styleUrl: './men-clothing.component.css'
})
export class MenClothingComponent {




  data:any;



  ngOnInit(): void {
    fetch('https://fakestoreapi.com/products/category/men\'s clothing')
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
