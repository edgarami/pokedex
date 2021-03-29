import { isNgTemplate } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { Pokemon } from '../../../pokemon.model'
import { pluck } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class PokemonsService {
  
   constructor() { }

  pokemons: Pokemon[] = [
    {
      id: '1',
      image: 'assets/images/pichu.png',
      name: 'pichu',
      level: 500,
      type: 'Electrico',
      abilities: 'Electricidad estática',
      evolutions: 'Pikachu, Raichu'
    },
    {
      id: '2',
      image: 'assets/images/charmander.png',
      name: 'charmander',
      level: 40,
      type: 'fuego',
      abilities: 'adeadae',
      evolutions: 'charmander , charizard'
    },
    {
     id: '3',
      image: 'assets/images/squitle.png',
      name: 'Squirtle',
      level: 20,
      type: 'Agua',
      abilities: 'adeadae',
      evolutions: 'Wartortle , Blastoise'
    },
    {
     id: '4',
      image: 'assets/images/Pidgey.png',
      name: 'Pidgey',
      level: 50,
      type: 'volador',
      abilities: 'Vista Lince',
      evolutions: 'Pidgeotto , Pidgeot'
    },
    {
       id: '5',
      image: 'assets/images/Vulpix.png',
      name: 'Vulpix',
      level: 600,
      type: 'Fuego',
      abilities: 'absorbe fuego',
      evolutions: 'Ninetales'
    },
    {
      id: '6',
      image: 'assets/images/iglybuff.png',
      name: 'Igglybuff',
      level: 700,
      type: 'Globo',
      abilities: 'Gran encanto',
      evolutions: 'Jigglypuff , Wigglytuff'
    },
    {
      id: '7',
      image: 'assets/images/Bulbasaur.png',
      name: 'Bulbasaur',
      level: 200,
      type: 'Planta, veneno',
      abilities: 'Espesura',
      evolutions: 'Ivysaur, venusaur'
    },
    {
      id: '8',
      image: 'assets/images/Psyduck.png',
      name: 'Psyduck',
      level: 100,
      type: 'Agua',
      abilities: 'Humedad',
      evolutions: 'Golduck'
    },
    {
      id: '9',
      image: 'assets/images/abra.png',
      name: 'Abra',
      level: 500,
      type: 'Psíquico',
      abilities: 'Foco interno, Sincronia',
      evolutions: 'Kadabra, Alakazam'
    },
    {
      id: '10',
      image: 'assets/images/Gastly.png',
      name: 'Gastly',
      level: 800,
      type: 'Fantasma, Veneno',
      abilities: 'Levitación',
      evolutions: 'Haunter, Gengar'
    },
  ];
 

  getAllPokemons(): Pokemon[] {
    return this.pokemons
   
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


