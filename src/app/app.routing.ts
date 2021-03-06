﻿import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/index';
import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';
import { AuthGuard } from './_guards/index';
import { AddPhotoComponent } from './add-photo/index';
import { EditProfileComponent } from './edit-profile/index';

const appRoutes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'logout', component: LoginComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'add-photo', component: AddPhotoComponent },
    { path: 'edit', component: EditProfileComponent },



    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);
