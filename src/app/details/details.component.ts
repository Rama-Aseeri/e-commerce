import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  standalone: false,
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {

id:any;
data:any;
counter:number=0;

  constructor(private route:ActivatedRoute){
    this.id=this.route.snapshot.paramMap.get('id')}
  
    ngOnInit(): void {
  
      // Fetch products from the API
      fetch('https://fakestoreapi.com/products/'+this.id)
        .then(response => response.json())
        .then(result => {
          this.data = result;  // Assign fetched data to 'data' property
        })
        .catch(error => console.error('Error:', error));
    }


    increment(){
      this.counter+=1;
    }
  
  }
 