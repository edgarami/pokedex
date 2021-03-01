import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import{ NewPokemonFormComponent  } from './components/new-pokemon-form/new-pokemon-form.component'
import{ NavComponent  } from './components/nav/nav.component'
import{ FormPokemonComponent  } from './components/form-pokemon/form-pokemon.component'


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
  },

    ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
