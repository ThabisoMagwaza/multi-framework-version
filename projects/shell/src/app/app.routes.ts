import { loadRemoteModule } from '@angular-architects/module-federation';
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ReactWrapperComponent } from './components/react-wrapper.component';
import { LoginComponent } from './login/login.component';
import {
  startsWith,
  WebComponentWrapper,
  WebComponentWrapperOptions,
} from '@angular-architects/module-federation-tools';

export const APP_ROUTES: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'react',
    component: WebComponentWrapper,
    data: {
      remoteEntry: `https://d1f2oviiofygpt.cloudfront.net/marketing/latest/remoteEntry.js`,
      remoteName: 'react',
      exposedModule: './web-components',
      elementName: 'react-element',
    } as WebComponentWrapperOptions,
  },
  // {
  //   path: 'admin',
  //   component: ReactWrapperComponent,
  //   data: {
  //     remoteEntry: `http://localhost:4204/remoteEntry.js`,
  //     remoteName: 'react',
  //     exposedModule: './web-components',
  //     elementName: 'react-element',
  //   } as WebComponentWrapperOptions,
  // },
  {
    path: '**',
    component: NotFoundComponent,
  },

  // DO NOT insert routes after this one.
  // { path:'**', ...} needs to be the LAST one.
];
