import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit{
  gatinhoImagem: string = 'assets/images/cat-login.png';
  books: [] = [];
  submitted = false;
  loginForm: FormGroup;

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private router: Router
    ) {
    this.loginForm = this.formBuilder.group({
      username: [''],
      password: ['']
    });
   }

  ngOnInit(): void {}

  login() {
    this.submitted = true;

    if (this.loginForm.invalid) {
      return;
    }
    const { username, password } = this.loginForm.value;
    const credentials = {username: username, password: password}
    console.log('Tentativa de login:', username);
    
    this.authService.login(credentials).subscribe(
      (response) => {
        this.authService.saveToken(response.access_token);
        this.router.navigate(['/']); // Navegue para a página desejada após o login
        this.toastr.success('Login realizado com sucesso', 'Sucesso');
      },
      (error) => {
        console.error('Erro no login', error);
        this.toastr.error(error.error.detail, 'Erro');
      }
    )
  }
}

