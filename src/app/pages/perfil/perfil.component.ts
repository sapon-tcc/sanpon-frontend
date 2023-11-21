import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent {

  constructor(private authService: AuthService, private router: Router) {}

  nome = '';
  dataNascimento = '';
  descricao = '';
  imagemPerfil: string = 'assets/images/perfil-sanpon.jpg';

  modalAbertaDescricao = false;
  modalAberta = false;
  novoNome: string = '';
  novaDataNascimento: string = '';
  novaDescricao: string = '';

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }


  abrirModal() {
    // Abrir a modal e inicializar os campos com os valores atuais
    this.modalAberta = true;
    this.novoNome = this.nome;
    this.novaDataNascimento = this.dataNascimento;
    this.novaDescricao = this.descricao;
  }

  fecharModal() {
    // Fechar a modal
    this.modalAberta = false;
  }

  salvarAlteracoes() {
    // Salvar as alterações apenas se os campos não estiverem vazios
    if (this.novoNome.trim() !== '' && this.novaDataNascimento.trim() !== '' && this.novaDescricao.trim() !== '') {
      this.nome = this.novoNome;
      this.dataNascimento = this.novaDataNascimento;
      this.descricao = this.novaDescricao;
      this.fecharModal();
    }
  }
}
