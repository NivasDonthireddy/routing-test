import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Mail } from './models/mail.interface';

@Injectable({
  providedIn: 'root'
})
export class MailService {
  constructor(
    private http:HttpClient
  ) { }

  getFolder(folder:string):Observable<Mail[]>{
    return this.http
      .get<Mail[]>(`http://localhost:3000/messages?folder=${folder}`);
  }

  getMessage(id:string):Observable<Mail>{
    return this.http.get<Mail>(`http://localhost:3000/messages/${id}`);
  }

}
