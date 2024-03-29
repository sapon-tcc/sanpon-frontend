import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Book } from '../book.interface';
import { ToastrService } from 'ngx-toastr';


@Injectable({
  providedIn: 'root'
})
export class BookService {
  private apiBook = 'https://sanpon.onrender.com/api/v1/books';
  private apiBookSeggestion = 'https://sanpon.onrender.com/api/v1/suggestion';
  private apiBookDetail = 'https://sanpon.onrender.com/api/v1/books';
  private apiBookOpinions = 'https://sanpon.onrender.com/api/v1/books/opinion';

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

  enviarOpiniao(opiniao: any): Observable<any> {
    return this.http.post<any>(`${this.apiBookOpinions}`, opiniao);
  }
}
