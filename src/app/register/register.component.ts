import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AlertService, UserService } from '../_services/index';

@Component({
    moduleId: module.id.toString(),
    templateUrl: 'register.component.html'
})

export class RegisterComponent {
    model: any = {};
    loading = false;
    checkNick = true;
    checkLen = false;
    checkEmail = true;
    checkLenEm = false;

    constructor(
            private router: Router,
            private userService: UserService,
            private alertService: AlertService) { }

        register() {
            this.loading = true;
            console.log(this.model);
            this.userService.create(this.model)
                .subscribe(
                    data => {
                        this.alertService.success('Registration successful', true);
                        this.router.navigate(['/login']);
                    },
                    error => {
                        this.alertService.error(error);
                        this.loading = false;
                    });
        }

        onNickNameChange() {
          if ((this.model.nick_name.length >= 4) && (this.model.nick_name.length <= 30)) {
            this.userService.checkNickFree(this.model.nick_name)
            .subscribe(
              data => {
                if(data.free == true) {
                  // console.log(data);
                  this.checkNick = true;
                }else {
                  // console.log("false");
                  this.checkNick = false;
                }

              },
              error => {
                  this.alertService.error(error);
                  this.checkNick = false;
              }
            );
            this.checkLen = false;
          } else this.checkLen = true;
      }

      onEmailCheck() {
        if ((this.model.email.length != 0){
          this.userService.checkEmailFree(this.model.email)
          .subscribe(
            data => {
              if(data.free == true) {
                // console.log(data);
                this.checkEmail = true;
              }else {
                // console.log("false");
                this.checkEmail = false;
              }

            },
            error => {
                this.alertService.error(error);
                this.checkEmail = false;
            }
          );
        } else this.checkLenEm = true;
    }


}
