import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { AboutComponent } from './about/about.component';
import { RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { PuppiesComponent } from './puppies/puppies.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    PageNotFoundComponent,
    ContactComponent,
    PuppiesComponent
  ],
  imports: [
    BrowserModule, 
    RouterModule,
    AppRoutingModule
  ],
  providers: [AppRoutingModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
