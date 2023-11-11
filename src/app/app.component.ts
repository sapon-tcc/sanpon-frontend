import { Component, OnInit, OnDestroy } from '@angular/core';
import { LoadingService } from './services/loading.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  loading: boolean;
  private loadingSubscription: Subscription;

  constructor(public loadingService: LoadingService) { }

  ngOnInit(): void {
    this.loadingSubscription = this.loadingService.loading$.subscribe((loading: boolean) => {
      // Agendamos a atualização da variável 'loading' para a próxima iteração do ciclo de detecção de mudanças
      setTimeout(() => {
        this.loading = loading;
      });
    });
  }

  ngOnDestroy(): void {
    this.loadingSubscription.unsubscribe();
  }
}
