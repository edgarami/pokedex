import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PokemonDetailComponent } from './components/pokemon-detail/pokemon-detail.component';
import { PokemonsComponent } from './components/pokemons/pokemons.component';

const routes: Routes = [
  {
    path: '',
    component: PokemonsComponent
  },
  {
    path: ':id',
    component: PokemonDetailComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class PokemonRoutingModule {}
