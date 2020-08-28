import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Mech } from './mech';


@Injectable({
  providedIn: 'root'
})
export class MechService {
  private mechUrl = 'api/mechs';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) {}

  /** GET mechs from the server */
  getMechs(): Observable<Mech[]> {
    return this.http.get<Mech[]>(this.mechUrl)
      .pipe(
        catchError(this.handleError<Mech[]>('getMechs', []))
      );
  }

  /** GET mech by id. Return `undefined` when id not found */
  getMechNo404<Data>(name: string): Observable<Mech> {
    const url = `${this.mechUrl}/?name=${name}`;
    return this.http.get<Mech[]>(url)
      .pipe(
        map(mechs => mechs[0]), // returns a {0|1} element array
        catchError(this.handleError<Mech>(`getMech name=${name}`))
      );
  }

  /** GET mech by id. Will 404 if id not found */
  getMech(name: string): Observable<Mech> {
    const url = `${this.mechUrl}/?name=${name}`;
    return this.http.get<Mech>(url)
      .pipe(
        catchError(this.handleError<Mech>(`getMech name=${name}`))
      );
  }

  /* GET mechs whose name contains search term */
  searchMechs(name?: string, form?: string): Observable<Mech[]> {
    let url = `${this.mechUrl}/?`;
    if (name != null && name.match(/^ *$/) == null) {
      url += `&name=${name}`
    }
    if (form.trim() && form != "All Form Factors") {
      url += `&form=${form}`
    }
    console.log(url);
    return this.http.get<Mech[]>(url)
      .pipe(
        catchError(this.handleError<Mech[]>('searchMechs', []))
      );
  }

  /* GET mechs whose name contains search term */
  searchForm(term: string): Observable<Mech[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<Mech[]>(`${this.mechUrl}/?formVal=${term}`)
      .pipe(
        catchError(this.handleError<Mech[]>('searchMechs', []))
      );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
