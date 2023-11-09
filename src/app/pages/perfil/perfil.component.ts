import { Component } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent {
  nome = 'Usuário Exemplo';
  dataNascimento = '01/01/1990';
  descricao = 'Esta é uma descrição de exemplo';

  editarDescricao() {
    const novaDescricao = prompt('Digite uma nova descrição:');
    if (novaDescricao !== null) {
      this.descricao = novaDescricao;
    }
  }

  editarPerfil() {
    const novoNome = prompt('Digite um novo nome:');
    const novaDataNascimento = prompt('Digite uma nova data de nascimento:');
    if (novoNome !== null && novaDataNascimento !== null) {
      this.nome = novoNome;
      this.dataNascimento = novaDataNascimento;
    }
  }
}
