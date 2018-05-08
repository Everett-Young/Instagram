import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../_models/index';
import { UserService } from '../_services/index';
import { AlertService, UserService } from '../_services/index';

@Component({
  moduleId: module.id.toString(),
  templateUrl: './add-photo.component.html',
  styleUrls: ['./add-photo.component.css']
})
export class AddPhotoComponent implements OnInit {
  currentUser: User;
  form: any = {};
     files: any;

     constructor(
       private userService: UserService,
       private alertService: AlertService) {
         let juser = JSON.parse(localStorage.getItem('currentUser'));
         this.currentUser = juser.user;
         this.form = {
             name: {}
         };
     }

     addPhoto(event) {
         let target = event.target || event.srcElement;
         this.files = target.files;
     }

     uploadImage() {
         let final_data;
         if (this.files) {
             let files: FileList = this.files;
             console.log(files);
             const formData = new FormData();
             for (let i = 0; i < files.length; i++) {
                 formData.append('image', files[i]);
             }
             formData.append('data', JSON.stringify(this.form));
             final_data = formData;
             this.userService.addPhotos(final_data).subscribe(resp => {
               this.alertService.success('Image successful add in you story', true);
                  console.log(resp);
              });
         } else {
             alert("Файл не выбран");
         }

     };
  ngOnInit() {
  }
}
