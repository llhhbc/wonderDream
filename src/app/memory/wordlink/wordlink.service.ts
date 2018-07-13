import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import {WordLink} from './wordlink';

//for test data
import {WORDLINK} from './worddata';

@Injectable({
  providedIn: 'root'
})
export class WordlinkService {

  getWords(): Observable<WordLink[]> {
    //return this.http.get<WordLink[]>('http://localhost:3631/api/wordList/wordPair');
    return of(WORDLINK);
  }

  constructor(private http: HttpClient) { }
}
