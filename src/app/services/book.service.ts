import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Book } from '../book.interface';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private apiUrl = 'https://sanpon.onrender.com/api/v1/books';
  private booksSubject = new BehaviorSubject<[]>([]);

  constructor(private http: HttpClient) { }

  getBooks(): Observable<[]> {
    return this.booksSubject.asObservable();
  }

  searchBooks(query: string): void {
    if (query.trim() !== '') {
      this.http.get<Book>(`${this.apiUrl}?q=${query}`)
        .subscribe(data => {
          console.log(data.items)
          this.booksSubject.next(data.items);
        });
    }
  }
}
