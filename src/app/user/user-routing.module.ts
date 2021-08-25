import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../user/login/login.component';
import { RegisterComponent } from '../user/register/register.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent,

    },
    
    {
        path: 'register',
        component: RegisterComponent,
    },

    {
        path: 'profile',
        component: ProfileComponent
    }


];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UserRoutingModule { }