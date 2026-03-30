import { Routes } from '@angular/router';
import { Dashboard } from './components/dashboard/dashboard';
import { Login } from './components/login/login';
import { Projects } from './components/projects/projects';
import { Register } from './components/register/register';
import { Students } from './components/students/students';
import { SubmitProject } from './components/submit-project/submit-project';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'home',
        pathMatch:'full',
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
        path:'submit-porject',
        component:SubmitProject
    }

];
