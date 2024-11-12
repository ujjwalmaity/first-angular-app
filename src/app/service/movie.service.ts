import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Movie } from '../model/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private apiUrl: string = 'https://api.themoviedb.org/3';
  private apiKey: string = '024d69b581633d457ac58359146c43f6';
  private language: string = 'en-US';

  constructor(private http: HttpClient) {
    console.log('MovieService - constructor');
  }

  public getPopularMovie$(page: number = 1): Observable<Movie[]> {
    const params: HttpParams = this.buildParams({ page: page.toString() });
    return this.http.get<Movie[]>(`${this.apiUrl}/movie/popular`, { params })
      .pipe(catchError(this.handleError));;
  }

  private buildParams(params: any): HttpParams {
    let httpParams: HttpParams = new HttpParams().set('api_key', this.apiKey).set('language', this.language);
    for (const key in params) {
      if (params.hasOwnProperty(key)) {
        httpParams = httpParams.set(key, params[key]);
      }
    }
    return httpParams;
  }

  private handleError(error: any): Observable<never> {
    return throwError(() => error);
    // return throwError(() => new Error('Something went wrong'));
  }

}
