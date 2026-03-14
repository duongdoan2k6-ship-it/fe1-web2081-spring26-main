import { Routes } from '@angular/router';
import { Home } from './page/home/home';
import { Contact } from './page/contact/contact';
import { About } from './page/about/about';
import { Stories } from './pages/stories/stories';


export const routes: Routes = [
  {
    path: 'home', // ko code /home
    component: Home,
  },
  {
    path:'contact',
    component: Contact
  },
  {
    path:'about',
    component: About
  },
  {
    path:'stories',
    component: Stories
  }
  
];