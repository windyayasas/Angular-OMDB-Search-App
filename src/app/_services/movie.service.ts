/**
 * @class: Movie Service
 * @description: Service class to handle movie related data from backend
 * @author: windya yasas
 */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Observable, of } from 'rxjs';
import { Movie, MoviesMockResponse, MoviesResponse } from '../_models/movie';

@Injectable({
  providedIn: 'root'
})

/**
 * initialize and implement functionalities related movie service
 */
export class MovieService {

  constructor(private http: HttpClient) { }

  /**
   * 
   * @description service to get movie list from backend api call
   * @param searchKey - Search string
   * @param page - Page index for pagination
   */
  getMovies(searchKey, page): Observable<MoviesResponse> {
    return this.http.get<MoviesResponse>(`${environment.apiUrl}/?s=${searchKey}&page=${page}&apikey=${environment.apiKey}`);
  }

  /**
   *  @description service to get movie details from backend api call
   *  @param movieId - Movie imdb id
   */
  getMovieById(movieId): Observable<Movie> {
    return this.http.get<Movie>(`${environment.apiUrl}/?i=${movieId}&apikey=${environment.apiKey}`);
  }


 /**
 * 
 * @description service to get movie list from MOck api call
 * @param searchKey - Search string
 * @param page - Page index for pagination
 */
  getMoviesMock(searchKey, page){
    return this.http.get<MoviesMockResponse>(`${environment.mockApiUrl}api/movies?s=${searchKey}&page=${page}&apikey=${environment.apiKey}`);
  }
}
