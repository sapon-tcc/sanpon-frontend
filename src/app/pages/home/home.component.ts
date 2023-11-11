import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { BookService } from '../../services/book.service';
import 'bootstrap/dist/js/bootstrap.js';

// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination } from 'swiper';

// install Swiper modules
SwiperCore.use([Navigation, Pagination]);

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {
  gatinhoIcone: string = 'assets/images/cat-icon.png';
  books: [] = [];
  currentIndex = 0;

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.getSuggestions();
  }

  getSuggestions(): void {
    this.bookService.getSuggestions().subscribe({
      next: (data) => {
        console.log(data);
        this.books = data;
        // Outras ações que você deseja realizar após obter os livros
      },
      error: (error) => {
        console.error('Erro ao obter livros:', error);
      },
    });
  }


}

