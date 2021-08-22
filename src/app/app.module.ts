import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { environment } from 'src/environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { UserModule } from './user/user.module';
import { ItemsComponent } from './items/items.component';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    ItemsComponent, 
    HomeComponent, AddMovieComponent 
  ],
  imports: [
    BrowserModule,
    UserModule,
    FontAwesomeModule,
    AngularFireModule.initializeApp(environment.firebase, 'movie-blog'),
    AppRoutingModule,
    AngularFirestoreModule,
    AppRoutingModule,
    CoreModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
