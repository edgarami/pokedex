import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../../../pokemon.model'
import { PokemonsService } from './../../../core/services/pokemons/pokemons.service'

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.scss']
})
export class PokemonsComponent implements OnInit {
  title = 'pokedex';

  pokemons: Pokemon[] 
  
  constructor(
    private pokemonsService: PokemonsService
  ) { }

  ngOnInit()  {
    this.pokemonsService.getAllPokemons()
    .subscribe((data: Pokemon[])=>{
      this.pokemons = data
    })
   // this.fetchPokemons()
  }
  
  clickPokemon(id: string) {
    console.log('pokemon')
    console.log(id)
  }
  handleEdit(event: Pokemon){
    this.pokemons = this.pokemons.map((pokemon: Pokemon)=>{
      if(pokemon.id === event.id){
        pokemon = Object.assign({}, pokemon,event)
      }
      return pokemon
    })
  }
  handleRemove(event: Pokemon){
    console.log(event)
    this.pokemons = this.pokemons.filter((pokemon: Pokemon)=>{
      return pokemon.id !== event.id
    })
  }

 

 /* peticion a mi funcion que consulta la api

  fetchPokemons() {
    this.pokemonsService.getAllPokemons()
    .subscribe((pokemons : Pokemon[] ) => {
      console.log(pokemons)
      this.pokemons = pokemons;
    })

  }*/

}
/*


*/