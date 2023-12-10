import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Book } from '../book.interface';
import { ToastrService } from 'ngx-toastr';


@Injectable({
  providedIn: 'root'
})
export class BookService {
  private apiBook = 'http://ec2-52-70-194-31.compute-1.amazonaws.com/api/v1/books';
  private apiBookSeggestion = 'http://ec2-52-70-194-31.compute-1.amazonaws.com/api/v1/suggestion';
  private apiBookDetail = 'http://ec2-52-70-194-31.compute-1.amazonaws.com/api/v1/books';
  private apiBookOpinions = 'http://ec2-52-70-194-31.compute-1.amazonaws.com/api/v1/books/opinion';

  constructor(private http: HttpClient) { }


  getSuggestions(): Observable<any> {
    return this.http.get<Book>(`${this.apiBookSeggestion}`)
  }

  searchBooks(query: string, subject = ''): Observable<any> {
    return this.http.get<Book>(`${this.apiBook}?q=${query}&s=${subject}`)
  }

  getDetalhesLivro(livroId: string): Observable<any> {
    return this.http.get<Book>(`${this.apiBookDetail}/${livroId}`)
  }

  getOpinion(livroId: string): Observable<any> {
    return this.http.get<Book>(`${this.apiBookOpinions}/${livroId}`)
  }
}
