import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { auth } from '../models/auth.model';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http : HttpClient) { }


  Login(data:auth):Observable<any>{

    return this.http.post<any>('https://localhost:7205/api/Auth',data);
  }
}
