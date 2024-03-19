import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, delay } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ApiResult, MovieResult } from './interface';

const BASE_URL = 'https://api.themoviedb.org/3';
// const API_KEY = environment.apiKey;

@Injectable({
  providedIn: 'root'
})

export class MovieService {
  private http = inject(HttpClient);

  constructor() { }

  getTopRaitedMovies(page = 1): Observable<ApiResult> {
    return this.http.get<ApiResult>(`${BASE_URL}/movie/popular?page=${page}&api_key=b98c0b75b15b633f599dab2c7322d4ca`).pipe(delay(2000));
  }

  getNewMovies(page = 1): Observable<ApiResult> {
    return this.http.get<ApiResult>(`${BASE_URL}/movie/now_playing?page=${page}&api_key=b98c0b75b15b633f599dab2c7322d4ca`).pipe(delay(2000));
  }

  getSerieTv(page = 1): Observable<ApiResult> {
    return this.http.get<ApiResult>(`${BASE_URL}/tv/popular?page=${page}&api_key=b98c0b75b15b633f599dab2c7322d4ca`).pipe(delay(2000));
  }

  getMovieDetails(id: string): Observable<MovieResult> {
    return this.http.get<MovieResult>(`${BASE_URL}/movie/${id}?api_key=b98c0b75b15b633f599dab2c7322d4ca`);
  }
}
