import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';


import { PageNotFoundComponent } from './page-not-found/page-not-found.component'
import { LayoutComponent } from './layout/layout.component'
import { from } from 'rxjs';

const routes: Routes = [
   {
    path: '',
    component:LayoutComponent,
    
    //vistas anidadas

    children: [
      {
        path:'',
        redirectTo:'/home',
        pathMatch: 'full',
      },
      {
    path: 'home',
    //
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
    //component:HomeComponent

  },
   {
    path: 'pokemons',
    loadChildren: () => import('./pokemon/pokemon.module').then(m => m.PokemonModule)
    //component:PokemonsComponent
  },
]
   },
   {
    path:'admin',
     loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)

  },
   {
    path: '**',
    component:PageNotFoundComponent
  }
  
]
@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
