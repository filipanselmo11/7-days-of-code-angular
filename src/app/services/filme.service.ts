import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FilmeInterface } from '../types/filme';

@Injectable({
  providedIn: 'root'
})
export class FilmeService {

  baseURL = 'http://localhost:3000';

  constructor(private httpClient: HttpClient) { }

  getFilms(): Observable<FilmeInterface[]> {
    return this.httpClient.get<FilmeInterface[]>(`${this.baseURL}/results`);
  }
}
