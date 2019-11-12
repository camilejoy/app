import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  private url:String = "http://localhost:90";
  private headers = new HttpHeaders().set('Content-Type', 'application/json');

  getUsers():Observable<any>{
    return this.http.get<any>(
      this.url + "/users"
    );
  }

  getUser(id):Observable<any>{
    return this.http.get<any>(
      this.url + "/user/" + id
    );
  }

  addUser(user):Observable<any>{
    return this.http.post<any>(
      this.url + "/user",
      user,
      {headers: this.headers}
    );
  }

  updateUser(user, id):Observable<any>{
    return this.http.put<any>(
      this.url + "/user/" + id,
      user,
      {headers: this.headers}
    );
  }

  deleteUser(id):Observable<any>{
    return this.http.delete<any>(
      this.url + "/user/" + id
    );
  }
}
