import { Component, OnInit, ViewEncapsulation  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from 'src/app/services/book.service';
import { ToastrService } from 'ngx-toastr';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';



SwiperCore.use([Navigation, Pagination]);

@Component({
  selector: 'app-livro',
  templateUrl: './livro.component.html',
  styleUrls: ['./livro.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class LivroComponent implements OnInit {
  livroId: string;
  detalhesLivro: any; // Altere o tipo conforme a estrutura real do seu livro
  opinioesLivro: any;
  erroAoCarregarDetalhes: boolean = false;
  mostrarModal: boolean = false;
  opiniaoForm: FormGroup;
  

  constructor(
    private route: ActivatedRoute, 
    private bookService: BookService,
    private toastr: ToastrService,
    private fb: FormBuilder
    ) {}

  ngOnInit() {
    this.livroId = this.route.snapshot.paramMap.get('id');
    this.carregarDetalhesDoLivro();
    this.carregarOpinioesDoLivro();
    this.opiniaoForm = this.fb.group({
      // Defina seus controles de formulário aqui
      text: ['', Validators.required],
      book_id: [{ value: this.livroId }],
      predict: [0],
      classification: ['']
    });
  }

  carregarDetalhesDoLivro() {
    this.bookService.getDetalhesLivro(this.livroId).subscribe(
      (detalhesLivro) => {
        this.detalhesLivro = detalhesLivro;
        this.erroAoCarregarDetalhes  = false;
        console.log(this.detalhesLivro)
        console.log(this.erroAoCarregarDetalhes)
        this.toastr.success('Livro carregado com sucesso', 'Sucesso');
      },
      (error) => {
        console.error('Erro ao carregar detalhes do livro:', error);
        this.toastr.error(error.error.detail, 'Erro');
        this.erroAoCarregarDetalhes = true;
      }
    );
  }

  carregarOpinioesDoLivro() {
    this.bookService.getOpinion(this.livroId).subscribe(
      (opinioesLivro) => {
        this.opinioesLivro = opinioesLivro;
        console.log(this.opinioesLivro)
        this.toastr.success('Opinioes carregado com sucesso', 'Sucesso');
      },
      (error) => {
        console.error('Erro ao carregar opinioes do livro:', error);
        this.toastr.error(error.error.detail, 'Erro');
      }
    );
  }

  convertToNumber(value: any): number {
    console.log(value)
    return value; // Converte para número
  }

  exibirModalOpiniao(): void {
    this.mostrarModal = true;
    // Resetar o formulário ou inicializar valores padrão, se necessário
    this.opiniaoForm.reset();
  }

  fecharModal(): void {
    // Fecha o modal
    this.mostrarModal = false;
  }

  enviarOpiniao() {

    if (this.opiniaoForm.valid){
      const opiniao = this.opiniaoForm.value;
      const payload = { ...opiniao, book_id: this.livroId };

      this.bookService.enviarOpiniao(payload).subscribe(
        (response) => {
          this.toastr.success('Comentário adicionado com sucesso', 'Sucesso');
          // Recarregar a tela
          location.reload();
        },
        (error) => {
          // Lógica para tratar erros
          console.error('Erro ao enviar comentário:', error);
        }
      );

    }

    
  }


}
