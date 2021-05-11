/**
 * @class: Movie Model
 * @description: Model class to handle movie related data
 * @author: windya yasas
 */
export class Movie {
    imdbID: string; // Movie imdb Id
    Plot: string;
    Actors: string;
    Ratings: Array<any>;
    Poster: string;
    Title: string;
    Year: string;
    Awards?: string;
    BoxOffice?: string;
    Country?: string;
    DVD?: string;
    Director?: string;
    Genre?: string;
    Language?: string;
    Metascore?: string;
    Production?: string;
    Rated?: string;
    Released?: string;
    Response?: string;
    Runtime?: string;
    Type?: string;
    Website?: string;
    Writer?: string;
    imdbRating?: string;
    imdbVotes?: string;
    isDetailed?: boolean;

    constructor() {

        this.imdbID = null;
        this.Plot = '';
        this.Actors = '';
        this.Ratings = [];
        this.Poster = '';
        this.Title = '';
        this.Year = null;

    }

    selectMovie(imdbID, plot, actors, ratings, poster, title, year, isDetailed) {
        this.imdbID = imdbID;
        this.Plot = plot;
        this.Actors = actors;
        this.Ratings = ratings;
        this.Poster = poster;
        this.Title = title;
        this.Year = year;
        this.isDetailed = isDetailed;
    }

    deselectMovie() {
        this.imdbID = null;
        this.Plot = '';
        this.Actors = '';
        this.Ratings = [];
        this.Poster = '';
        this.Title = '';
        this.Year = null;
    }
}

export interface MoviesResponse {
    Response: string,
    Error: string,
    Search: Array<Movie>, 
    totalResults: number
}

export interface MoviesMockResponse {
    Response?: string,
    Movies?:Array<Movie>,
    Error?: string,
    Search?: Array<Movie>, 
    totalResults?: number
}


