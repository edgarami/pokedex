import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { NewPokemonFormComponent } from './components/new-pokemon-form/new-pokemon-form.component';
import { ReactiveFormsModule } from '@angular/forms';

import { NavComponent } from './components/nav/nav.component';
import { FormPokemonComponent } from './components/form-pokemon/form-pokemon.component'
import { MatSidenavModule } from '@angular/material/sidenav';
import { MaterialModule } from './../material/material.module';
import { TableComponent } from './components/table/table.component';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { LayoutModule } from '@angular/cdk/layout';

@NgModule({
  declarations: [NewPokemonFormComponent, NavComponent, FormPokemonComponent, PokemonListComponent, TableComponent, DashboardComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
    MatSidenavModule,
    MatGridListModule,
    LayoutModule
  
   
  ]
})
export class AdminModule { }
