import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { RouterModule, Routes } from '@angular/router';
import { NotfoundComponent } from './notfound/notfound.component';
import { MenubarModule } from 'primeng/menubar';
import { HeaderComponent } from './header/header.component';

const routes: Routes = [
  {path: '', component: HomeComponent}, // when your in rooturl it will navigate to home
  // {path: '', redirectTo: 'home', pathMatch: 'full'}, // when your in rooturl it will redirect to home
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  //not found routing and it should add bottom of routing
  {path:'**', component: NotfoundComponent } // this is called as wild card route
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenubarModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
