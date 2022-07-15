import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { Observable, pluck } from 'rxjs';
import { Mail } from '../../models/mail.interface';

@Component({
  selector: 'mail-view',
  styleUrls: ['./mail-view.component.scss'],
  template: `
      <div class="mail-view">
        <h2>{{(message | async)?.from}}</h2>
        <p>{{(message|async)?.summary}}</p>
      </div>
  `
})
export class MailViewComponent implements OnInit {
  message:Observable<Mail> = this.route.data.pipe(pluck('message'));
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
  }

}
