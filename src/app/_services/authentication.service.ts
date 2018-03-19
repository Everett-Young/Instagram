import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable()
export class AuthenticationService {
    constructor(private http: HttpClient) { }

    login(modelUser) {
      console.log(modelUser);
        return this.http.post('https://js-course-instagram.herokuapp.com/api/authorization/', modelUser)
            .map(user => {
              console.log(user);
                // if (user && user.token) {
                //     localStorage.setItem('currentUser', JSON.stringify(user));
                // }

                return user;
            });
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}
