/**
 * This file is used to define the needed modules to be imported, the components to be
 *  declared and the main component to be bootstrapped
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { MovieCardComponent } from './movie-card/movie-card.component';


@NgModule({
  declarations: [HeaderComponent, MovieCardComponent],
  exports: [HeaderComponent, MovieCardComponent],
  entryComponents: [],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: []
})
export class ComponentsModule { }