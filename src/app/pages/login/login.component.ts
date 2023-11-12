import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  gatinhoImagem: string = 'assets/images/cat-login.png';
  books: [] = [];
  loginForm: FormGroup;
  submitted = false;

  constructor(private bookService: BookService, private formBuilder: FormBuilder, private router: Router) {
    this.loginForm = this.formBuilder.group({
      nm_nome: ['', [Validators.required, Validators.email]],
      nm_email: ['', [Validators.required, Validators.email]],
      nm_senha: ['', [Validators.required, Validators.minLength(6)]]
    });
   }

  ngOnInit(): void {
    // this.bookService.getBooks()
    //   .subscribe(data => {
    //     console.log(data);
    //     this.books = data;
    //   });
  }

  login() {
    this.submitted = true;

    if (this.loginForm.invalid) {
      return;
    }
    const { usuario, senha } = this.loginForm.value;
    console.log('Tentativa de login:', usuario);
    setTimeout(() => {
      this.router.navigate(['/']);
    }, 3000);
  }

}

