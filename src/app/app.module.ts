import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './pages/header/header.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { HttpClientModule, HTTP_INTERCEPTORS  } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { LoadingInterceptor } from './interceptors/loading.interceptor';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { SwiperModule } from 'swiper/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { LoadingService } from './services/loading.service';
import { LoadingComponent } from './pages/loading/loading.component';
import { SearchBarComponent } from './pages/search/search.component';
import { SearchResultsComponent } from './pages/search-results/search-results.component';
import { LivroComponent } from './pages/livro/livro.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    CadastroComponent,
    PerfilComponent,
    LoadingComponent,
    SearchBarComponent,
    SearchResultsComponent,
    LivroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ProgressSpinnerModule,
    SwiperModule,
    BrowserAnimationsModule,
    MatProgressBarModule,
    ToastrModule.forRoot(),
  ],
  providers: [
      {
        provide: HTTP_INTERCEPTORS,
        useClass: LoadingInterceptor,
        multi: true
      },
      LoadingService,
  ],
  exports: [LoadingComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
