import { Component } from '@angular/core';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  imagemPerfil: string = 'assets/images/perfil-sanpon.jpg';
  query: string = '';

  constructor(private bookService: BookService) { }

  searchBooks(): void {
    this.bookService.searchBooks(this.query);
  }
}
