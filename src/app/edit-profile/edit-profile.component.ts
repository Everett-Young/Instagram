import { Component, OnInit } from '@angular/core';
import {User} from '../_models';
import 'rxjs/add/operator/map';
import { User } from '../_models/index';
import { UserService } from '../_services/index';
import {AlertService} from '../_services';

@Component({
  moduleId: module.id.toString(),
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  currentUser: User;


  constructor(private userService: UserService,private alertService: AlertService) { }

  addAvatar(event) {
    let target = event.target || event.srcElement;
    this.files = target.files;
  }

  uploadAvatar() {
    let final_data;
    if (this.files) {
      let files: FileList = this.files;
      console.log(files);
      const formData = new FormData();
      for (let i = 0; i < files.length; i++) {
        formData.append('image', files[i]);
      }
      final_data = formData;
      this.userService.addAva(final_data).subscribe(resp => {
        this.alertService.success('Avatar successful change!', true);
      });
    } else {
      alert('Файл не выбран');
    }

  };
  ngOnInit() {
    let juser = JSON.parse(localStorage.getItem('currentUser'));
    this.currentUser = juser.user;
    // console.log(this.currentUser);
  }

}
