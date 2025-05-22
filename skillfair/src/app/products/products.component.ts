import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  standalone: true,
  templateUrl: './products.component.html'
})
export class ProductsComponent {
  products = [
    { label: 'kitchen', img: 'https://content.codecademy.com/projects/make-a-website/lesson-4/kitchen.jpg' },
    { label: 'woodwork', img: 'https://content.codecademy.com/projects/make-a-website/lesson-4/woodwork.jpg' },
    { label: 'gifts', img: 'https://content.codecademy.com/projects/make-a-website/lesson-4/gifts.jpg' },
    { label: 'antiques', img: 'https://content.codecademy.com/projects/make-a-website/lesson-4/antique.jpg' }
  ];
}


