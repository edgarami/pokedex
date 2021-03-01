import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonComponent } from './components/pokemon/components/pokemon.component';
import { PokemonDetailComponent } from './components/pokemon-detail/pokemon-detail.component';
import { PokemonsComponent } from './components/pokemons/pokemons.component';

import { PokemonRoutingModule } from './pokemon-routing.module';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule  } from './../material/material.module';


@NgModule({
  declarations: [
    PokemonComponent,
    PokemonDetailComponent,
    PokemonsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PokemonRoutingModule,
   MaterialModule
  ]
})
export class PokemonModule {

}
