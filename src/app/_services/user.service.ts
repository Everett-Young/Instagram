import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../_models/index';

@Injectable()
export class UserService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<User[]>('/api/users');
    }

    getById(id: number) {
        return this.http.get('/api/users/' + id);
    }

    create(user: User) {
        return this.http.post('https://js-course-instagram.herokuapp.com/api/registration', user);
    }

    addPhotos(form: FormData) {
        return this.http.post('http://3e07af7f.ngrok.io/api/image/upload', form);
    }

    checkNickFree(nick_name: string){
      return this.http.get('https://js-course-instagram.herokuapp.com/api/check/nick_name/'+nick_name);
    }

    checkEmailFree(email: string){
      return this.http.get('https://js-course-instagram.herokuapp.com/api/check/email/'+email);
    }

    // update(user: User) {
    //     return this.http.put('/api/users/' + user.id, user);
    // }
    //
    // delete(id: number) {
    //     return this.http.delete('/api/users/' + id);
    // }
}
