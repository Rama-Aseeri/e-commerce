import { Store } from '@ngrx/store';
import { Component,inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { increment } from '../state/counter/counter.actions';
import { decrement } from '../state/counter/counter.actions';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-details',
  standalone: false,
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {

id:any;
data:any;
private store=inject(Store)
counter:number=0;
count$?:Observable<number>

  constructor(private route:ActivatedRoute){
    this.id=this.route.snapshot.paramMap.get('id')
    this.count$=this.store.select('counter');
  
  
  }
    
  
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
      this.store.dispatch(increment());
      // Show SweetAlert2 notification
    Swal.fire({
      title: 'Success!',
      text: 'item added to cart!',
      icon: 'success',
      timer: 1500, // Auto-close after 1.5 seconds
      showConfirmButton: false
    })
  }

    decrement(){
      this.store.dispatch(decrement());
      Swal.fire({
        title: 'Success!',
        text: 'item removed from cart!',
        icon: 'success',
        timer: 1500, // Auto-close after 1.5 seconds
        showConfirmButton: false
      });
    }



  
  }
 