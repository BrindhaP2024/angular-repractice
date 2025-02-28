import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Product } from '../../../model/product.model';
import { loadProducts, addProduct } from '../../state/product.action';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { selectAllProducts } from '../../state/product.selectors';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products$: Observable<Product[]>;
  productName = '';
  productPrice = 0;

  constructor(private store: Store) {
    this.products$ = this.store.select(selectAllProducts);
  }

  ngOnInit() {
    this.store.dispatch(loadProducts()); // Fetch products on component load
  }

  addProduct() {
    if (!this.productName || this.productPrice <= 0) return;

    const newProduct: Product = {
      id: Math.floor(Math.random() * 1000),
      name: this.productName,
      price: this.productPrice
    };

    this.store.dispatch(addProduct({ product: newProduct }));

    // Reset input fields
    this.productName = '';
    this.productPrice = 0;
  }
}
