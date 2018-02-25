import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GlobalLibraryPage } from './global-library';
import { HttpModule } from '@angular/http';


@NgModule({
  declarations: [
    GlobalLibraryPage,
  ],
  imports: [
    IonicPageModule.forChild(GlobalLibraryPage),
    HttpModule
  ],
})
export class GlobalLibraryPageModule {}
