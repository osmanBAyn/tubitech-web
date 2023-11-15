import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OurTeamComponent } from './our-team/our-team.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
    {
        path:"home",
        component:HomeComponent
    },
    {
        path:"",
        redirectTo:"home",
        pathMatch:"full"
    },
    {
        path:"ourTeam",
        component:OurTeamComponent
    },
    {
        path:"social",
        loadChildren:()=>import('./social/social.module').then(m=>m.SocialModule)
    },
    {
        path:"contact",
        component:ContactComponent
    }
];
