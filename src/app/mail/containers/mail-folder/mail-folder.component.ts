import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { Observable, pluck } from 'rxjs';
import { Mail } from '../../models/mail.interface';

@Component({
  selector: 'mail-folder',
  styleUrls: ['mail-folder.component.scss'],
  template: `
    <h2>{{title | async}}</h2>
    <mail-item
      *ngFor="let message of (messages| async)"
      [message]="message">
    </mail-item>
  `
})
export class MailFolderComponent implements OnInit {

  constructor(private route:ActivatedRoute) { }
  data:Observable<any> = this.route.data;
  messages?:Observable<Mail[]> = this.route.data.pipe(pluck('messages'));
  title:Observable<string> = this.route.params.pipe(pluck('name'));
  ngOnInit(): void {
  }

}
