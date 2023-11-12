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
import { PesquisarComponent } from './pages/pesquisar/pesquisar.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { SwiperModule } from 'swiper/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { LoadingService } from './services/loading.service';
import { LoadingComponent } from './pages/loading/loading.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    CadastroComponent,
    PesquisarComponent,
    PerfilComponent,
    LoadingComponent,
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
