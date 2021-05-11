/**
 * @class: MovieComponent
 * Purpose of this component is to search and view movie list and details
 * @description: Implement all logics related to movie list view
 * @author: windya yasas
 */
import { ThrowStmt } from '@angular/compiler';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Movie } from 'src/app/_models/movie';
import { MovieService } from 'src/app/_services/movie.service';
/**
 *  Pagin start offset to screen height
 */
const SCROLL_OFFSET = 350;
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})


/**
 * initialize and implement functionalities related movie component
 * @implements OnInit
 */
export class MoviesComponent implements OnInit {
  //Reference to html scrollable division
  @ViewChild('scrollContent', { static: false }) public scrollContent: ElementRef;
  searchKey: string; // search string
  movieList: Array<any>; // movie list
  selectedMovie: Movie; // movie object
  initScreen: boolean; // Detemine Start screen or not 
  error: string; // Error message string
  totalResults: number; // Total movie count showing
  page: number; // no of pages showing
  isScrollLoadEnable: boolean; // When true, Load next page movie list
  selectedMovieUndetailsMovie: any; // Selected movie's details in movie list
  selectedMovieIndex: number; // selected movie's Movie list array index

  /**
   * 
   * @param movieService Service to access backend services related to movies
   */
  constructor(private movieService: MovieService) {
    this.searchKey = null;
    this.error = null;
    this.initScreen = true;
    this.selectedMovie = new Movie();
    this.movieList = [];
    this.totalResults = null;
    this.initPagination();

  }


  /**
   * use to execute methods on page initialize
   */
  ngOnInit(): void {
  }

  /**
   * Initialize Pagination related variables
   */
  initPagination() {
    this.page = 1;
    this.isScrollLoadEnable = true;
    this.selectedMovieUndetailsMovie = null;
    this.selectedMovieIndex = null;
  }

  /**
   * Method to search movie list after user enter search string
   * @description : Reset movie list, Total results and selected movie. Then search movies according search string and pagination
   */
  onSearch(searchKey) {
    this.initPagination();
    this.searchKey = searchKey;
    this.totalResults = null;
    this.movieList = [];
    this.selectedMovie.deselectMovie();
    this.error = null;
    if (searchKey) {
      this.getMovies();
    } else {
      this.initScreen = true;
    }
  }


  /**
   * Method to load next page's movie list
   * @description: Increment page no of page count by 1 and load movie list
   * @returns set of movies
   */
  nextPage() {
    this.page++;
    this.getMovies();
  }

  /**
   * Load next page data when page scroll
   * @description If screen scroll came down to screen load next page's movie data
   * @returns set of movies
   */
  onScroll() {
    const scrollContentUI: HTMLCanvasElement = this.scrollContent.nativeElement;

    //Calc no of pixels scroll bar's scroll position to bottom of the screen
    let scrollFromBottom = scrollContentUI.scrollHeight - scrollContentUI.scrollTop - scrollContentUI.clientHeight; // Offset from page bottom to scroll bar position
    let offset = SCROLL_OFFSET; // Offset to compare with above


    //If page scroll down to the offset range load next page data
    if (scrollFromBottom < offset && this.isScrollLoadEnable) {
      this.nextPage();
    }

    //Compare scroll offset with defined offset
    if (scrollFromBottom >= offset) {
      this.isScrollLoadEnable = true;
    } else {
      this.isScrollLoadEnable = false;
    }
  }



  /**
   * Method to get movies by search key and page index
   * @description : Get movie list by giving search string and page index then concat new page's movies with old movies and show all movies in frontend
   * @returns set of movies
   */
  getMovies() {
    this.error = null;

    this.movieService.getMovies(this.searchKey, this.page).subscribe(
      (res) => {
        if (res.Response == "True") {
          let searchedMovies = res.Search;
          //concat current movies to next page movies
          Array.prototype.push.apply(this.movieList, searchedMovies);

          this.totalResults = res.totalResults;
          if (this.movieList && this.movieList.length == 0) {
            this.showError('Movie not found');
          }
        } else {
          this.showError('Movie not found');
        }
        this.initScreen = false;

      },
      (err) => {
        //Alert error from backend
        this.showError('Unable to load data, Please check your internet connection');

      });
  }
  /**
   * Assign value to error variable
   * Show error message
   * @param text : Eroor messsage
   */
  showError(text) {
    this.initScreen = false;
    this.error = text;
  }


  /**
   * Method to get movie details by IMD id of a movie
   * @param imdbId : Movie imdbId  which use to get movie detail from backend
   * @param index : Movie list Array index
   * @returns specific movie related to imdb id
   */
  getMovieDetails(imdbId, index) {
    this.movieService.getMovieById(imdbId).subscribe(
      (res) => {
        //If backend response return true add movie details to current movie object
        if (res.Response == "True") {

          // Reset previos selected movie data
          if (this.selectedMovieUndetailsMovie) {
            this.movieList[this.selectedMovieIndex] = this.selectedMovieUndetailsMovie;
          }

          // Set current movie index and object in movie array list
          this.selectedMovieIndex = index;
          this.selectedMovieUndetailsMovie = this.movieList[index];
          // Create movie full detail object
          this.selectedMovie.selectMovie(res.imdbID, res.Plot, res.Actors, res.Ratings, res.Poster, res.Title, res.Year, true);

          this.movieList[index] = this.selectedMovie;


        }
      },
      (err) => {
        //Alert error from backend
        this.showError('Unable to load data, Please check your internet connection');

      });
  }




}
