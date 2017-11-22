import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GlobalLibraryPage } from './global-library';

@NgModule({
  declarations: [
    GlobalLibraryPage,
  ],
  imports: [
    IonicPageModule.forChild(GlobalLibraryPage),
  ],
})
export class GlobalLibraryPageModule {}
