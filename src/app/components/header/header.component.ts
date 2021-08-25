import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  tab:string = ''

  constructor() { }

  ngOnInit(): void {
    var link = document.location.href.split('/');
    if (link.length === 4) this.tab = link[3]
  }

  setTab(newTab:string) {
    this.tab = newTab
  }
}
