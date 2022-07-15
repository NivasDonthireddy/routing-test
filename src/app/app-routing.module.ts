import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MailViewComponent } from './mail/components/mail-view/mail-view.component';
import { MailViewResolve } from './mail/components/mail-view/mail-view.resolve';
import { MailFolderComponent } from './mail/containers/mail-folder/mail-folder.component';
import { MailFolderResolve } from './mail/containers/mail-folder/mail-folder.resolve';
import { MailService } from './mail/mail.service';

const routes: Routes = [
  { path: 'folder/:name', component: MailFolderComponent , resolve: {messages: MailFolderResolve} },
  {
    path: 'message/:id',
    component: MailViewComponent,
    outlet: 'pane',
    resolve: {
      message: MailViewResolve
    }
  },
  { path: '**', redirectTo: 'folder/inbox' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    MailService,
    MailFolderResolve,
    MailViewResolve
  ]
})
export class AppRoutingModule { }
