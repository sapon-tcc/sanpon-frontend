// app.component.ts
import { Component, ChangeDetectorRef } from '@angular/core';
import { LoadingService } from './services/loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isLoading$ = this.loadingService.loading$;

  constructor(public loadingService: LoadingService) { }
}
