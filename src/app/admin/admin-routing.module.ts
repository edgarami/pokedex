import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import{ NewPokemonFormComponent  } from './components/new-pokemon-form/new-pokemon-form.component'
import{ NavComponent  } from './components/nav/nav.component'
import{ FormPokemonComponent  } from './components/form-pokemon/form-pokemon.component'
import {DashboardComponent } from './components/dashboard/dashboard.component'
import {TableComponent } from './components/table/table.component'
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component'

const routes: Routes = [
 
  {
    path: '',
    component:NavComponent,
    children: [
       {
    path: 'create',
    component:NewPokemonFormComponent
  },
   {
    path: 'pokemon/edit',
    component:FormPokemonComponent
  }, {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'table',
        component: TableComponent
      },
      {
        path: 'pokemons',
        component: PokemonListComponent
      },

    ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
