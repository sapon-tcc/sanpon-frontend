import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Book } from '../book.interface';


@Injectable({
  providedIn: 'root'
})
export class BookService {
  private apiBook = 'https://sanpon.onrender.com/api/v1/books';
  private apiBookSeggestion = 'https://sanpon.onrender.com/api/v1/suggestion';

  constructor(private http: HttpClient) { }


  getSuggestions(): Observable<any> {
    return this.http.get<Book>(`${this.apiBookSeggestion}`)
  }

  searchBooks(query: string, subject = ''): Observable<any> {
    return this.http.get<Book>(`${this.apiBook}?q=${query}&s=${subject}`)
  }
}
