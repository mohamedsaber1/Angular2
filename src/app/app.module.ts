import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { ItemsComponent } from './components/items/items.component';
import { ChartComponent } from './components/chart/chart.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { LogoutComponent } from './components/logout/logout.component';
import { NavbarComponent } from './components/navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ItemsComponent,
    ChartComponent,
    NotfoundComponent,
    SigninComponent,
    SignupComponent,
    LogoutComponent,
    NavbarComponent

    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyBxPuGQNTmbTvGLuYGY-2cdtQlN0oh16Tc",
      authDomain: "momarket-470ce.firebaseapp.com",
      projectId: "momarket-470ce",
      storageBucket: "momarket-470ce.appspot.com",
      messagingSenderId: "222700502283",
      appId: "1:222700502283:web:b0c21567ef377729bd360e",
      measurementId: "G-8LPP2FJNLV"

    }),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
