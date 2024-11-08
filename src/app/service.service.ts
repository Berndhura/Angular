import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(
    private http: HttpClient
  ) { }

  
  getBooks(): any {
    return this.http.get<any>('https://api.npms.io/v2/search?q=scope:angular').subscribe(data => {
      console.log(data)
  })
  }
}
