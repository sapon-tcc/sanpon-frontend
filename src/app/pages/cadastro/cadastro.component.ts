
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Usuario } from '../shared/usuario';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  gatinhoImagemCadastro: string = 'assets/images/cat-cadastro.png';
  form: FormGroup;
  registradoComSucesso: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private auth: AuthService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.myGroup(new Usuario());
  }

  myGroup(usuario: Usuario) {
    this.form = this.formBuilder.group({
      nm_name: [usuario.nm_name, []],
      nm_password: [usuario.nm_password, []],
      nm_email: [usuario.nm_email, []]
    })
  }

  salvar() {
    if (this.form.valid) {
      const { nm_name, nm_password, nm_email } = this.form.value;
      this.auth.save({ nm_name: nm_name, nm_password: nm_password, nm_email: nm_email }).subscribe(
        (response) => {
          this.router.navigate(['/login']); // Navegue para a página desejada após o login
          this.toastr.success('Cadastro realizado com sucesso', 'Sucesso');
        },
        (error) => {
          console.error('Erro no cadastro', error);
          this.toastr.error(error.error.detail, 'Erro');
        }
      )
    }
  }
}
