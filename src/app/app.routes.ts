import { Routes } from '@angular/router';
import { Home } from './page/home/home';
import { Contact } from './page/contact/contact';

export const routes: Routes = [
  {
    path: 'home', // ko code /home
    component: Home,
  },
  {
    path:'contact',
    component: Contact
  },
];