import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = 'http://localhost:3000/api';  

  constructor(private http: HttpClient) {}

  getUserProfile(): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('x-auth-token', token || '');
    return this.http.get<any>(`${this.apiUrl}/user`, { headers });
  }

  addToCart(productId: string): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('x-auth-token', token || '');
    return this.http.post<any>(`${this.apiUrl}/cart/add`, { productId }, { headers });
  }

  removeFromCart(productId: string): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('x-auth-token', token || '');
    return this.http.post<any>(`${this.apiUrl}/cart/remove`, { productId }, { headers });
  }

  addToWishlist(productId: string): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('x-auth-token', token || '');
    return this.http.post<any>(`${this.apiUrl}/wishlist/add`, { productId }, { headers });
  }

  removeFromWishlist(productId: string): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('x-auth-token', token || '');
    return this.http.post<any>(`${this.apiUrl}/wishlist/remove`, { productId }, { headers });
  }
}
