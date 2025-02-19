import { Component } from '@angular/core';

@Component({
  selector: 'app-jewelry',
  standalone: false,
  templateUrl: './jewelry.component.html',
  styleUrl: './jewelry.component.css'
})
export class JewelryComponent {




  data:any;

  ngOnInit() {
    fetch('https://fakestoreapi.com/products/category/jewelery')
        .then(response => response.json())
        .then(result => {
          this.data = result;  // Assuming `data` is a variable in your component to store the response
        })
        .catch(error => {
          console.error('Error fetching data:', error); // Handle any errors that might occur
        });}


        showDescription(item: any): void {
          item.showDescription = !item.showDescription;
        }
        
      
}
