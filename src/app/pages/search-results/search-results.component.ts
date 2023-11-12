// search-results.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
})
export class SearchResultsComponent implements OnInit {
  searchResults: any[] = [];

  constructor(private route: ActivatedRoute, private searchService: BookService) {}

  ngOnInit() {
    // Captura a consulta da rota
    this.route.queryParams.subscribe((params) => {
      const query = params['q'];
      if (query) {
        // Realiza a pesquisa usando o serviço
        this.searchService.searchBooks(query).subscribe((results) => {
          this.searchResults = results;
        });
      }
    });
  }
}
