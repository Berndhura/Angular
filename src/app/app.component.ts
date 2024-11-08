import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  constructor(private http: HttpClient) {}
  
  response$: Observable<any> | undefined;
  responseAvailable: boolean = false;

  getData() {
    this.response$ = this.http.get('https://jsonplaceholder.typicode.com/users')
    this.responseAvailable = true;
  }

  title = 'my-app';
}

interface SearchResults {
  author: string;
  description: string;
}