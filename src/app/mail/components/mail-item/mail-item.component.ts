import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Mail } from '../../models/mail.interface';

@Component({
  selector: 'mail-item',
  styleUrls: ['mail-item.component.scss'],
  template: `
    <a
    [routerLink]="['',{outlets: {pane: ['message',this.message?.id]}}]"
    routerLinkActive="active"
     class="mail-item">
      <h3>
        {{ message?.from }}
        <span>{{ message?.timestamp | date:'shortTime'}}</span>
      </h3>
      <p>{{ message?.summary }}</p>
    </a>
  `
})
export class MailItemComponent implements OnInit {
  @Input()
  message?: Mail;
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  navigateToMessage(){
    this.router.navigate(['',{outlets: {pane: ['message',this.message?.id]}}])
  }

}
