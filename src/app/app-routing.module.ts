import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { PageNotFoundComponent } from './not-found/not-found.component'
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PuppiesComponent } from './puppies/puppies.component';

const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: '',   component: HomeComponent },
    { path: 'about', component: AboutComponent},
    { path: 'contact', component: ContactComponent},
    { path: 'puppies', component: PuppiesComponent},
    { path: '**', component: PageNotFoundComponent }
  ];

  @NgModule({
    imports: [
      RouterModule.forRoot(appRoutes)
    ],
    exports: [
      RouterModule
    ]
  })
  export class AppRoutingModule {}