import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, tap } from 'rxjs';
import { environment } from '../../../environments/environment';
import { AuthResponse, LoginRequest } from '../models/auth.dto';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private tokenKey = 'jwtToken';
  private _isLoggedIn$ = new BehaviorSubject<boolean>(!!this.getToken());
  isLoggedIn$ = this._isLoggedIn$.asObservable(); 

  constructor(private http: HttpClient) {}

  login(body: LoginRequest) {
    return this.http.post<AuthResponse>(`${environment.apiUrl}/auth/login`, body)
      .pipe(
        tap(res => {
          if (res?.token) {
            this.saveToken(res.token);
            this._isLoggedIn$.next(true); 
          }
        })
      );
  }

  saveToken(token: string) {
    localStorage.setItem(this.tokenKey, token);
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  logout() {
    localStorage.removeItem(this.tokenKey);
    this._isLoggedIn$.next(false);
  }
}
