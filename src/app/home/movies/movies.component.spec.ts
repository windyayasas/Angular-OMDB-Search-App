/**
 * @description: System generated code
 * @author: windya yasas
 */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MoviesComponent } from './movies.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
describe('MoviesComponent', () => {
  let component: MoviesComponent;
  let fixture: ComponentFixture<MoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule 
      ],
      declarations: [ MoviesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('#Execute onSearch method', () => {
    expect(component.onSearch('Avengers'));
  });

  it('#Execute nextPage method', () => {
    expect(component.nextPage());
  });

  it('#Execute onScroll method', () => {
    expect(component.onScroll());
  });

  it('#Execute getMovies method', () => {
    expect(component.getMovies());
  });

  it('#Execute getMovieDetails method', () => {
    let sampleMovieId = "tt8784956";
    expect(component.getMovieDetails(sampleMovieId,1));
  });

});
