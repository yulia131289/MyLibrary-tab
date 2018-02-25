import { Component } from '@angular/core';

import { GlobalLibraryPage } from '../global-library/global-library';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab2Root = GlobalLibraryPage;

  constructor() {

  }
}
