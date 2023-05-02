import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css']
})
export class PokedexComponent implements OnInit {

  pokemon: any;
  pokemonId: number = 1;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getPokemon(this.pokemonId);
  }

  getPokemon(id: number) {
    this.http.get(`https://pokeapi.co/api/v2/pokemon/${id}`).subscribe((response: any) => {
      this.pokemon = response;
      console.log(this.pokemon);
    });
  }

  formatHeight(height: number): string {
    return `${(height / 10).toFixed(1)} m`;
  }

  formatWeight(weight: number): string {
    return `${(weight / 10).toFixed(1)} kg`;
  }

  getImg(): string { return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${this.pokemonId}.png` }

  nextPokemon() {
    this.pokemonId++; if (this.pokemonId > 1008)
    { this.pokemonId = 1; }
      this.getPokemon(this.pokemonId);
    }


  prevPokemon() {
    this.pokemonId--; if (this.pokemonId <= 0)
    { this.pokemonId = 1008; }
      this.getPokemon(this.pokemonId);
    }


  randomPokemon() {
    this.pokemonId = Math.floor(Math.random() * 1008) + 1;
    this.getPokemon(this.pokemonId);
  }
}
