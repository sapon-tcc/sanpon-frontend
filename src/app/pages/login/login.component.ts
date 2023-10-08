import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  gatinhoImagem: string = 'assets/images/cat-login.png';
  books: [] = [];

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.bookService.getBooks()
      .subscribe(data => {
        console.log(data);
        this.books = data;
      });
  }

}

