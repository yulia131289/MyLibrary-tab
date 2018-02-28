import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';
//import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';



import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MovieApi, AuthService, FirebaseService} from '../providers/services'
import { GlobalLibraryPage } from '../pages/global-library/global-library';
import { WantToWatchListPage } from '../pages/want-to-watch-list/want-to-watch-list';
import { AlreadyWachedListPage } from '../pages/already-watched-list/already-watched-list';
import { MovieDetailPage } from "../pages/movie-detail/movie-detail";
import { LoginPage } from "../pages/login/login";
import { RegisterPage } from "../pages/register/register";


//import { environment } from '../environments/environment';




@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    GlobalLibraryPage,
    WantToWatchListPage,
    AlreadyWachedListPage,
    MovieDetailPage,
    LoginPage,
    RegisterPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule // imports firebase/storage only needed for storage features
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    GlobalLibraryPage,
    WantToWatchListPage,
    AlreadyWachedListPage,
    MovieDetailPage,
    LoginPage,
    RegisterPage 
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MovieApi,
    AuthService,
    FirebaseService

    

  ]
})
export class AppModule {}
