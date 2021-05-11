/**
 * @class: Movie Card Component
 * Purpose of this component is to reuse movie card in many pages
 * @description: Implement all logics related to movie card and movie details view
 * @author: windya yasas
 */
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Movie } from 'src/app/_models/movie';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {
  @Input() movie: Movie; // Input value from other component
  @Output() onSelectMovie = new EventEmitter<any>(); // Output event to other component
  
  constructor() {
   // this.movie = this.selectedMovie;
   
  }

  ngOnInit(): void {
  }

  /**
   * Select movie to see in detail view
   * @param imdbID : Movie id
   */

  getMovieDetails(imdbID) {
    this.onSelectMovie.emit(imdbID);
  }

}
