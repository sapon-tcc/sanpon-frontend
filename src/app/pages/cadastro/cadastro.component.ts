
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Usuario } from '../shared/usuario';
import { UsuarioService } from '../shared/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  gatinhoImagemCadastro: string = 'assets/images/cat-cadastro.png';
  form: FormGroup;
  registradoComSucesso: boolean = false;

  constructor(private formBuilder: FormBuilder, private usuarioService: UsuarioService, private router: Router) { }

  ngOnInit() {
    this.myGroup(new Usuario());
  }

  myGroup(usuario: Usuario) {
    this.form = this.formBuilder.group({
      usuario: [usuario.usuario, [Validators.required]],
      senha: [usuario.senha, [Validators.required]]
    })
  }

  salvar() {
    if (this.form.valid) {
      const { usuario, senha } = this.form.value;

      const registrado = this.usuarioService.registrarUsuario(usuario, senha);

      if (registrado) {
        this.form.reset();
        this.registradoComSucesso = true; // Define a mensagem como visível
        console.log('Usuário registrado com sucesso!');

        // Redirecione para a página inicial (rota raiz) após algum tempo
        setTimeout(() => {
          this.router.navigate(['/']);
        }, 3000); // Redireciona após 3 segundos (pode ajustar o tempo)
      } else {
        console.error('Nome de usuário já existe. Escolha outro nome de usuário.');
      }
    }
  }
}
