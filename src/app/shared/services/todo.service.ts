import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ITodoItem } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor(private http: HttpClient) {}

  getTodos(): Observable<ITodoItem[]> {
    return this.http.get<ITodoItem[]>(
      'https://run.mocky.io/v3/c1e570cc-57f4-4516-b22f-85c9da2ead53'
    );
  }
}
