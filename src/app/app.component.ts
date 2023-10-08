// app.component.ts
import { Component, OnInit } from '@angular/core';
import { LoadingService } from './services/loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loading: boolean;

  constructor(public loadingService: LoadingService) { }

  ngOnInit(): void {
    this.loadingService.loading$.subscribe((loading: boolean) => {
      this.loading = loading;
    });
  }
}
