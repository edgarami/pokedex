import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { NewPokemonFormComponent } from './components/new-pokemon-form/new-pokemon-form.component';
import { ReactiveFormsModule } from '@angular/forms';

import { NavComponent } from './components/nav/nav.component';
import { FormPokemonComponent } from './components/form-pokemon/form-pokemon.component'
import { MatSidenavModule } from '@angular/material/sidenav';
import { MaterialModule } from './../material/material.module';

import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [NewPokemonFormComponent, NavComponent, FormPokemonComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
    MatSidenavModule,
    MatListModule
  
   
  ]
})
export class AdminModule { }
