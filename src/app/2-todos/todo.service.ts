import { Injectable } from '@angular/core'; 
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators'

@Injectable()
export class TodoService { 
  constructor(private http: HttpClient) { 
  }

  add(todo) {
    return this.http.post('...', todo).pipe(map(data => data));
  }

  getTodos() { 
    return this.http.get('...').pipe(map(data => data));
  }

  getTodosPromise() {
    return this.http.get('...').pipe(map(data => data)).toPromise();
  }

  delete(id) {
    return this.http.delete('...').pipe(map(data => data));
  }
}