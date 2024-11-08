import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private router: Router) { }

  logout(): void {
    localStorage.removeItem('authToken');

    this.router.navigate(['/login']);
  }
}
