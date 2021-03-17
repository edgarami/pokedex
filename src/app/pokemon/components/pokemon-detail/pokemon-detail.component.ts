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

  pokemon: Pokemon = {} as Pokemon;

  constructor(
    private route: ActivatedRoute,
    private pokemonsService: PokemonsService
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      console.log(params)
      const id = params.id;
     // this.pokemon =  this.pokemonsService.getPokemon(id)!
      
    });
  }

}
