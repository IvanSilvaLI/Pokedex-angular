import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PokedexComponent } from './pokedex/pokedex.component'; // Importe o componente aqui

@NgModule({
  declarations: [
    AppComponent,
    PokedexComponent // Adicione o componente ao array 'declarations'
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
