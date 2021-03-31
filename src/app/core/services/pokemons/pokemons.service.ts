import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import{   Observable } from 'rxjs';

import { map } from "rxjs/operators";

import { PokemonResponse } from '../../../pokemon.model'
import { Pokemon } from '../../../pokemon.model'


const POKEMON_API = '../../../../assets/pk.json';

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {
  
   constructor(private http: HttpClient) {
    
    }
  pokemons: Pokemon[] = [];
 

  getAllPokemons(): Observable<Pokemon[]> {
    //return this.pokemons
    return this.http
   .get(POKEMON_API).pipe(map((response: PokemonResponse) =>  response.pokemons))

  }
  updatePokemons(pokemon: Pokemon): Observable<Pokemon>{
    //return this.pokemons
    return this.http
   .put(`${POKEMON_API}/${pokemon.id}`, pokemon).pipe(map((response: Pokemon) =>  response))
    

  }

  getPokemon(id:string): Observable<Pokemon> {
    
    return this.http.get<Pokemon>(`${POKEMON_API}/${id}`)
    .pipe(map((response: Pokemon)=> response))
  }
  createPokemon(pokemon: Pokemon) {
    return this.pokemons = [...this.pokemons, pokemon]

  }
}




/* Code for rest Api

 // list : Pokemon[] = []

  constructor(
    private http: HttpClient
  ) { }

  getAllPokemons() { 
    //pipe.pluck accedo directamente al key que toma por parametro de un objeto 
    //this.http.get<Pokemon[]>('https://pokeapi.co/api/v2/pokemon/').pipe(pluck('results')).subscribe( (pokemon : Pokemon[])  => this.list = pokemon )
    
    return this.http.get<Pokemon[]>('https://pokeapi.co/api/v2/pokemon/').pipe(pluck('results'));

  }

  getPokemon(id: number){
     return this.http.get(`https://pokeapi.co/api/v2/pokemon/${id}/`);
    //return this.pokemons.find(item => id === item.id)
  } */


