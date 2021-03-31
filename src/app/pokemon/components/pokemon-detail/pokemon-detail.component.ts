import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params } from '@angular/router';

import { PokemonsService } from '../../../core/services/pokemons/pokemons.service';
import { Pokemon } from './../../../pokemon.model';


@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent implements OnInit {

  pokemon: Pokemon 

  constructor(
    private route: ActivatedRoute,
    private pokemonsService: PokemonsService
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      console.log(params)
      const id = params.id;
   
       this.fetchPokemon(id)
    })
    }

    fetchPokemon(id: string){
    this.pokemonsService.getPokemon(id)
    .subscribe(pokemon => {
      console.log(pokemon);
      this.pokemon = pokemon

    })
  }

   createPokemon(){
    const newPokemon: Pokemon = {
      id: "222",
      image:"assets\images\charmander.png",
      name: "kadabra",
      level: 3,
      type: "fuego",
      abilities: "correr",
      evolutions: "charizard"
    };
    this.pokemonsService.createPokemon(newPokemon)
    .filter(pokemon =>{
   console.log(pokemon)
   
    })
  

  }

  


}

/* this.route.params.subscribe((params: Params) => {
      console.log(params)
      const id = params.id;
     
      this.pokemon =  this.pokemonsService.getPokemon(id)
      );
  }
*/