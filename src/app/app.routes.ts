import { Routes } from '@angular/router';
import { Dashboard } from './components/dashboard/dashboard';
import { Login } from './components/login/login';
import { Projects } from './components/projects/projects';
import { Register } from './components/register/register';
import { Students } from './components/students/students';
import { SubmitProject } from './components/submit-project/submit-project';
import { Home } from './components/home/home';
import { Competition } from './components/competition/competition';

export const routes: Routes = [
    {
        path:'home',
        component:Home
    },
    {
        path:'dashboard',
        component:Dashboard
    },
    {
        path:'login',
        component:Login
    },
    {
        path:'projects',
        component:Projects
    },
    {
        path:'register',
        component:Register
    },
    {
        path:'students',
        component:Students
    },
    {
        path:'submit-project/:id',
        component:SubmitProject
    },
     {
        path:'competition',
        component:Competition
    },
    {
        path:'',
        redirectTo:'home',
        pathMatch:'full',
    },
    {
        path:'**',
        redirectTo:'home'
    }
];
