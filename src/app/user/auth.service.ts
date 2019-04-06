import {Injectable} from '@angular/core';
import {IUser} from './user.model';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError, tap} from 'rxjs/operators';
import {of} from 'rxjs';

@Injectable()
export class AuthService {
  currentUser: IUser;

  constructor(private http: HttpClient) {
  }

  loginUser(userName: string, password: string) {
    const loginInfo = {username: userName, password: password};
    const options = { headers: new HttpHeaders({'Content-Type': 'application/json'}) };

    // Tap is the way to tap into the stream and take an action when a piece of data comes through the observable.
    // We're not manipulating the value in any way, so we don't want to do something like map, we want to use the tap method,
    // it lets us just see the value that comes through and we can take an action if we want based on that value,
    // but we're not manipulating what's going through the observable stream.
    return this.http.post('/api/login', loginInfo, options)
      .pipe(tap(data => {
        this.currentUser = data['user'] as IUser;
      }))
      .pipe(catchError(err => {
        return of(false);
      }));

    // this.currentUser = {
    //   id: 1,
    //   userName,
    //   firstName: 'John',
    //   lastName: 'Papa'
    // };
  }

  isAuthenticated() {
    return !!this.currentUser;
  }

  updateCurrentUser(firstName: string, lastName: string) {
    this.currentUser.firstName = firstName;
    this.currentUser.lastName = lastName;
  }
}
