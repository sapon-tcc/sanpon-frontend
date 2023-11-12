import { Component } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent {
  nome = '';
  dataNascimento = '';
  descricao = '';
  imagemPerfil: string = 'assets/images/perfil-sanpon.jpg';

  modalAbertaDescricao = false;
  modalAberta = false;
  novoNome: string = '';
  novaDataNascimento: string = '';
  novaDescricao: string = '';

  // editarDescricao() {
  //   const novaDescricao = prompt('Digite uma nova descrição:');
  //   if (novaDescricao !== null) {
  //     this.descricao = novaDescricao;
  //   }
  // }

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
