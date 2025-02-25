import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Observable, BehaviorSubject, of } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap, catchError } from 'rxjs/operators';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  searchQuery = ''; // Holds the input value
  private searchSubject = new BehaviorSubject<string>('');
  products: Observable<any[]> = new Observable();

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.products = this.searchSubject.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      switchMap(query =>
        this.productService.searchProducts(query).pipe(
          catchError(() => of([]))
        )
      )
    );
  }

  onSearch() {
    this.searchSubject.next(this.searchQuery);
  }
}
