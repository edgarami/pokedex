import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from "rxjs/operators"; 
import{  Observable } from 'rxjs';




import { Pokemon } from '../../../pokemon.model'

import { pluck } from 'rxjs/operators';


const POKEMON_API: string = 'C:\Users\elleo\Documents\angular\pokedex\db.json';

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
      .get(POKEMON_API).pipe(map((response: Response) => response.json()))
  }

  getPokemon(id:string) {
    return this.pokemons.find(item =>id === item.id )
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


