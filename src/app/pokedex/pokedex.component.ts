import { Component, OnInit } from '@angular/core';
import { PokedexService } from '../pokedex.service';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css']
})
export class PokedexComponent implements OnInit {

  pokemon: any;
  pokemonId: number = 1;
  pokemonTypes: string[] = [];
  errorMessage: string = '';

  constructor(private pokedexService: PokedexService) { }

  ngOnInit(): void { this.getPokemon(); }

  getPokemon(): void { this.pokedexService.getPokemon(this.pokemonId) .subscribe( pokemon => { this.pokemon = pokemon; this.pokemonTypes = pokemon.types.map((type: any) => type.type.name); }, error => this.errorMessage = error.message ); }

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
      this.getPokemon();
    }


  prevPokemon() {
    this.pokemonId--; if (this.pokemonId <= 0)
    { this.pokemonId = 1008; }
      this.getPokemon();
    }


  randomPokemon() {
    this.pokemonId = Math.floor(Math.random() * 1008) + 1;
    this.getPokemon();
  }
}
