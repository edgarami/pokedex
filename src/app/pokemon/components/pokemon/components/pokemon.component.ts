import { Component, Input,Output, EventEmitter  } from "@angular/core";

import { Pokemon } from '../../../../pokemon.model'

@Component({
  selector:'app-pokemon',
  templateUrl:'./pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})

export class PokemonComponent {

 @Input() pokemon: Pokemon  = Input();
 @Output() pokemonClicked: EventEmitter<any>  =new EventEmitter()

 addPokedex() {
   console.log('add pokedex')
   this.pokemonClicked.emit(this.pokemon.id)
 }

}