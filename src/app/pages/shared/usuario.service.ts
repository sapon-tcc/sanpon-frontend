import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private usuarios: { usuario: string, senha: string }[] = [];

  constructor() { }

  registrarUsuario(usuario: string, senha: string): boolean {
    const usuarioExistente = this.usuarios.find(user => user.usuario === usuario);
    if (usuarioExistente) {
      return false;
    }
    this.usuarios.push({ usuario, senha });
    return true;
  }

  getUsuarios(): { usuario: string, senha: string }[] {
    return this.usuarios;
  }
}
