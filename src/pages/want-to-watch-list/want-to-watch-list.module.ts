import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WantToWatchListPage } from './want-to-watch-list';

@NgModule({
  declarations: [
    WantToWatchListPage,
  ],
  imports: [
    IonicPageModule.forChild(WantToWatchListPage),
  ],
})
export class WantToWatchListPageModule {}
