import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/map';
import { User } from '../_models/index';
import { UserService } from '../_services/index';

@Component({
    moduleId: module.id.toString(),
    templateUrl: 'home.component.html',
    styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
    currentUser: User;
    imageUsers = [];

    constructor(private userService: UserService) {}

    ngOnInit() {
      let juser = JSON.parse(localStorage.getItem('currentUser'));
      this.currentUser = juser.user;
      this.userService.getUserImage().subscribe(listimg => {
        for (let i = 900; i < 920; i++) {
          this.imageUsers.push(listimg[i]);
        }

      });
    }

}
