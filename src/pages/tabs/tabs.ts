import { Component } from '@angular/core';

import { GlobalLibraryPage } from '../global-library/global-library';
import { WantToWatchListPage } from '../want-to-watch-list/want-to-watch-list';
import { AlreadyWachedListPage } from '../already-watched-list/already-watched-list';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = GlobalLibraryPage;
  tab2Root = WantToWatchListPage;
  tab3Root = AlreadyWachedListPage;

  constructor() {

  }
}
