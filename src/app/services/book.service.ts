import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private apiUrl = 'https://sanpon.onrender.com/api/v1/books'; // Substitua com a URL da sua API de livros

  constructor(private http: HttpClient) { }

  // Método para buscar livros com base em um termo de pesquisa
  searchBooks(searchTerm: string): Observable<any[]> {
    const url = `${this.apiUrl}?q=${searchTerm}`;
    return this.http.get<any>(url).pipe(
      map(response => response.items.map((item: any) => item))
    );
  }

  // Outros métodos para adicionar, atualizar, excluir livros, etc., se necessário
}
