import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  gatinhoIcone: string = 'assets/images/cat-icon.png';
  books: [] = [];
  booksSuggestions: [] = []

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.bookService.getBooks()
      .subscribe(data => {
        console.log(data);
        this.books = data;
      });

    // this.bookService.getSuggestionsBooks()
    //   .subscribe(data => {
    //     this.booksSuggetions = data
    //   });

  }
}

