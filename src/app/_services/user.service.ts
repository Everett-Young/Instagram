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
        return this.http.post('https://js-course-instagram.herokuapp.com/api/image/upload', form);
    }

    addAva(form: FormData) {
    return this.http.post('https://js-course-instagram.herokuapp.com/api/user/avatar', form);
    }

    checkNickFree(nick_name: string){
      return this.http.get('https://js-course-instagram.herokuapp.com/api/check/nick_name/'+nick_name);
    }

    checkEmailFree(email: string){
      return this.http.get('https://js-course-instagram.herokuapp.com/api/check/email/'+email);
    }

    getUserImage() {
      return this.http.get('https://picsum.photos/list')
        .map(res => {
          return res.map( res1 => {
            return {
              filename: 'https://picsum.photos/' + res1.filename,
              author: res1.author,
              dateAdd: '19/03/2018'
            };
          });
    });
    }
}
