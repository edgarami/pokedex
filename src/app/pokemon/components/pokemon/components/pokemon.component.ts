import { Component, OnChanges, OnInit, Input,Output, EventEmitter,   } from "@angular/core";

import { Pokemon } from '../../../../pokemon.model'

@Component({
  selector:'app-pokemon',
  templateUrl:'./pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})

export class PokemonComponent implements OnChanges, OnInit {

 @Input() 
 pokemon: Pokemon  = Input();
 
 @Input() 
 id: number;

 @Output() 
 pokemonClicked: EventEmitter<any>  = new EventEmitter()
 
 @Output()
 edit: EventEmitter<any> = new EventEmitter()
 
 @Output()
 remove: EventEmitter<any> = new EventEmitter()

 editing: boolean = false

 ngOnChanges(changes){
   if(changes.pokemon){
     this.pokemon = Object.assign({}, changes.pokemon.currentValue)
   }
   console.log('changes')
 }

 ngOnInit(){
   console.log('oninit')

 }

 addPokedex() {
   console.log('add pokedex')
   this.pokemonClicked.emit(this.pokemon.id)
 }
 onNameChange(value: string){
   console.log('Value:', value)
   this.pokemon.name = value
 }
 toggleEdit(){
   if(this.editing){
     this.edit.emit(this.pokemon)
   }
   this.editing = !this.editing
 }
 onRemove(){
  this.remove.emit(this.pokemon)
 }




}