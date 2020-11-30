import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {PokemonListComponent} from "./Components/pokemon-list/pokemon-list.component";



const routes: Routes = [
  {
    path: '',
    component: PokemonListComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{}
