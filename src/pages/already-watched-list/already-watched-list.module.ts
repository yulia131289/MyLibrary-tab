import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AlreadyWachedListPage } from './already-watched-list';

@NgModule({
  declarations: [
    AlreadyWachedListPage,
  ],
  imports: [
    IonicPageModule.forChild(AlreadyWachedListPage),
  ],
})
export class AlreadyWachedListPageModule {}
