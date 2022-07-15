import { MailAppComponent } from './components/mail-app/mail-app.component';
import { AppRoutingModule } from '../app-routing.module';
import { MailItemComponent } from './components/mail-item/mail-item.component';
import { MailFolderComponent } from './containers/mail-folder/mail-folder.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MailViewComponent } from './components/mail-view/mail-view.component';



@NgModule({
  declarations: [
    MailAppComponent,
    MailItemComponent,
    MailFolderComponent,
    MailViewComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    ReactiveFormsModule,
    CommonModule
  ],
  exports: [
    MailAppComponent,
    MailItemComponent,
    MailFolderComponent
  ]
})
export class MailModule { }
