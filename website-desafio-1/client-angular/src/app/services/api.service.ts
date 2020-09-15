import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public api = 'https://franciscoinoquea-api.herokuapp.com/';

  constructor(private http: HttpClient) { }

  downloadCV(email) {
  return this.http.post<any>(this.api + 'send-email', email)
  }


  contact(contactData) {
    return this.http.post<any>(this.api + 'contact', contactData)
  }
}
