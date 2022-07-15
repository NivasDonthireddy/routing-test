import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <div class="app">
      <header>
      </header>
      <div class="app__content">
        <nav>
          <a
            [routerLink]="[{outlets: {primary: 'folder/inbox',pane:null}}]"
            routerLinkActive="active">
            Inbox
          </a>
          <a
            [routerLink]="[{outlets: {primary: 'folder/trash',pane:null}}]"
            routerLinkActive="active">
            Trash
          </a>
        </nav>
        <mail-app></mail-app>
      </div>
    </div>
  `
})
export class AppComponent implements OnInit{
  constructor(
    private router:Router
  ){}
  ngOnInit(): void {
    this.router.events
          .pipe(filter(event => event instanceof NavigationEnd))
          .subscribe(data => console.log(data))
  }
}
