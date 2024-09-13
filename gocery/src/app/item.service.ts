
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private apiUrl = 'http://localhost:3000/api'; 

  constructor(private http: HttpClient) {}

  searchItems(query: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/items/search`, {
      params: { q: query }
    });
  }
}
