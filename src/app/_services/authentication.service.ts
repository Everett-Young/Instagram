import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable()
export class AuthenticationService {
    constructor(private http: HttpClient) { }

    login(modelUser) {
        return this.http.post('https://js-course-instagram.herokuapp.com/api/authorization', modelUser)
            .map(user => {

              let usertk = user["token"];
                  console.log(usertk);
              let usernm = user["user"];
                if (usernm && usertk) {
                    localStorage.setItem('currentUser', JSON.stringify(user));
                }
                return user;
            });
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}
