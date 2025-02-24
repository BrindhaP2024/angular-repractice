import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private apiUrl = 'https://jsonplaceholder.typicode.com/posts';
  // private apiUrl = 'https://dummyjson.com/posts';

  constructor(private http: HttpClient) {}

  getPosts(): Observable<any> {
    return this.http.get<any>(this.apiUrl).pipe(
      catchError(error => {
        console.error('Error fetching posts:', error);
        return throwError(() => new Error('Failed to load posts'));
      })
    );
  }
}
