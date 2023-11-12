// search-bar.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from 'src/app/services/book.service'; 

@Component({
  selector: 'app-search-bar',
  templateUrl: 'search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchBarComponent {
  searchQuery: string = '';

  constructor(private router: Router, private searchService: BookService) {}

  search() {
    // Redireciona para a página de resultados com a consulta como parâmetro de rota
    this.router.navigate(['/search-results'], { queryParams: { q: this.searchQuery } });
  }
}
