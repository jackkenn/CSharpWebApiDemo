import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { User } from './User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _userUrl: string = "api/users";
  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this._userUrl).pipe(
      retry(2),
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
    );
  }

  createUser(User: User): Observable<User> {
    return this.http.post<User>(this._userUrl, User).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
    )
  }

  editUser(User: User): Observable<any> {
    return this.http.put(this._userUrl + User.id, User);
  }

  deleteUser(id: number): Observable<any> {
    return this.http.delete(this._userUrl + id);
  }
}
