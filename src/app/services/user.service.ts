import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  private userApi = 'http://localhost:3000/user';

  constructor(private http: HttpClient) {}

  submitUser(user: any): Observable<any> {
    return this.http.post(this.userApi, user);
  }
}
