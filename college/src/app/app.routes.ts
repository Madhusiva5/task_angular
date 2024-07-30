import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { GalleryComponent } from './gallery/gallery.component';
import { LoginComponent } from './login/login.component';
import { ContactusComponent } from './contactus/contactus.component';
import { RegisterComponent } from './register/register.component';
import { TrackApplicationComponent } from './track-application/track-application.component';
import { StaffmarkentryComponent } from './staffmarkentry/staffmarkentry.component';
import { StaffattendenceComponent } from './staffattendence/staffattendence.component';
import { StaffhomeComponent } from './staffhome/staffhome.component';

export const routes: Routes = [
    {
        path:'',redirectTo:'/Home',pathMatch:'full'
    },
    {
        component:HomeComponent,
        path:'Home'
    },
    {
        component:AboutComponent,
        path:'About'
    },
    {
        component:GalleryComponent,
        path:'Gallery'
    },
    {
        component:LoginComponent,
        path:'Login'
    },
    {
        component:ContactusComponent,
        path:'Contact'
    },
    {
        component:RegisterComponent,
        path:'Reg'
    },
    {
        component:TrackApplicationComponent,
        path:'Track'
    },
    {
        component:StaffmarkentryComponent,
        path:'staffentry'
    },
    {
        component:StaffattendenceComponent,
        path:'staffattend'
    },
    {
        component:StaffhomeComponent,
        path:'staffhome'
    }
];
