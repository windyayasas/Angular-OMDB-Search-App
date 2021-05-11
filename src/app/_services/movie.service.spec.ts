
/**
 * @description: System generated code
 * @author: windya yasas
 */
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { TestBed } from "@angular/core/testing";
import { Movie, MoviesMockResponse } from "../_models/movie";
import { MovieService } from "./movie.service";

let httpClientSpy: { get: jasmine.Spy };
let httpMock: HttpTestingController;
let movieService: MovieService;
describe('MoviesService', () => {
  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);


    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [MovieService]
    });
    movieService = TestBed.get(MovieService);
    httpMock = TestBed.get(HttpTestingController);


  });


  it('Returned expected movie (HttpClient called once)', () => {

    //sample movie response
    const expectedMovie: any = {
      Title: "Ava",
      Year: "2020",
      Rated: "R",
      Released: "25 Sep 2020",
      Runtime: "96 min",
      Genre: "Action, Crime, Drama, Thriller",
      Director: "Tate Taylor",
      Writer: "Matthew Newton",
      Actors: "Jessica Chastain, John Malkovich, Common, Geena Davis",
      Plot: "Ava is a deadly assassin who works for a black ops organization, traveling the globe specializing in high profile hits. When a job goes dangerously wrong she is forced to fight for her own survival.",
      Language: "English, German, French, Chinese",
      Country: "USA",
      Awards: "N/A",
      Poster: "https://m.media-amazon.com/images/M/MV5BMTMzMTg1MjgtOWNhYy00NmZmLWExOTctMjA2OTZhZDFkNDhhXkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_SX300.jpg",
      Ratings: [
        {
          Source: "Internet Movie Database",
          Value: "5.4/10"
        },
        {
          Source: "Metacritic",
          Value: "39/100"
        }
      ],
      Metascore: "39",
      imdbRating: "5.4",
      imdbVotes: "43,592",
      imdbID: "tt8784956",
      Type: "movie",
      DVD: "N/A",
      BoxOffice: "$497,747",
      Production: "N/A",
      Website: "N/A",
      Response: "True"
    };
    let sampleMovieId = "tt8784956";
    movieService.getMovieById(sampleMovieId).subscribe((res) => {
      expect(res).toEqual(expectedMovie);
    });


  });




  it('Returned expected movie (HttpClient called once)', () => {
    //sample movie response
    const expectedMovie: any = {
      Title: "Ava",
      Year: "2020",
      Rated: "R",
      Released: "25 Sep 2020",
      Runtime: "96 min",
      Genre: "Action, Crime, Drama, Thriller",
      Director: "Tate Taylor",
      Writer: "Matthew Newton",
      Actors: "Jessica Chastain, John Malkovich, Common, Geena Davis",
      Plot: "Ava is a deadly assassin who works for a black ops organization, traveling the globe specializing in high profile hits. When a job goes dangerously wrong she is forced to fight for her own survival.",
      Language: "English, German, French, Chinese",
      Country: "USA",
      Awards: "N/A",
      Poster: "https://m.media-amazon.com/images/M/MV5BMTMzMTg1MjgtOWNhYy00NmZmLWExOTctMjA2OTZhZDFkNDhhXkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_SX300.jpg",
      Ratings: [
        {
          Source: "Internet Movie Database",
          Value: "5.4/10"
        },
        {
          Source: "Metacritic",
          Value: "39/100"
        }
      ],
      Metascore: "39",
      imdbRating: "5.4",
      imdbVotes: "43,592",
      imdbID: "tt8784956",
      Type: "movie",
      DVD: "N/A",
      BoxOffice: "$497,747",
      Production: "N/A",
      Website: "N/A",
      Response: "True"
    };

    httpClientSpy.get.and.returnValue(expectedMovie);
    let sampleMovieId = "tt8784956";
    movieService.getMovieById(sampleMovieId).subscribe(
      movie => expect(movie).toEqual(expectedMovie, 'expected movie'),
      fail
    );
    //expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
  });


  it('Returned expected movies for search "Ava" (Mock backend service)', () => {
    const expectedMovies: MoviesMockResponse = { Movies: [] };
    httpClientSpy.get.and.returnValue(expectedMovies);

    movieService.getMoviesMock('Ava', 1).subscribe(
      movies => expect(movies).toEqual(expectedMovies, 'expected movie'),
      fail
    );
    // expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
  });
});

