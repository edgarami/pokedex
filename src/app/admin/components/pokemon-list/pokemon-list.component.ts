import { Component, OnInit } from '@angular/core';
import { Pokemon } from'../../../pokemon.model'
import { PokemonsService } from './../../../core/services/pokemons/pokemons.service'
import { map } from 'rxjs/operators'

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {

  pokemons: Pokemon[] = [];
  displayedColumns: string[] = ['id','name','level']

  constructor(
    private pokemonsService: PokemonsService
  ) { }

  ngOnInit(): void {
    this.fetchPokemons()
  }

  fetchPokemons() {
   this.pokemonsService.getAllPokemons()
    .subscribe(pokemons => {
      this.pokemons = pokemons
   
    
   })
  }



}
