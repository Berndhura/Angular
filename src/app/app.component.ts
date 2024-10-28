import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Conditional } from '@angular/compiler';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  
  results: any={};
  books: any=[];

  constructor(private http: HttpClient) {}

  ngOnInit() {      
    // Simple GET request with response type <any>
    this.http.get<any>('https://api.npms.io/v2/search?q=scope:angular').subscribe(data => {
        console.log(data)
        this.results = data['results']
        this.books = Object.values(this.results);
    })
}
  title = 'GithubList';
}
