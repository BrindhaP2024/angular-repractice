import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http: HttpClient) {}

  // getProducts(): Observable<any[]> {
  //   const mockProducts = [
  //     { id: 1, name: 'Laptop', price: 1000 },
  //     { id: 2, name: 'Smartphone', price: 500 },
  //     { id: 3, name: 'Headphones', price: 100 },
  //   ];
  //   return of(mockProducts).pipe(delay(1000)); // Simulate API delay
  // }

  searchProducts(query: string): Observable<any[]> {
    console.log('API Call: Searching for', query);
    const products = [
      { id: 1, name: 'Laptop', price: 1000 },
      { id: 2, name: 'Smartphone', price: 500 },
      { id: 3, name: 'Headphones', price: 100 },
      { id: 4, name: 'Laptop Pro', price: 1500 },
      { id: 5, name: 'Tablet', price: 700 }
    ].filter(p => p.name.toLowerCase().includes(query.toLowerCase()));

    return of(products).pipe(delay(1000));
  }
}
