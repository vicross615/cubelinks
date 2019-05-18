import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CubeRequest } from '../models/CubeRequest';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  url = "http://localhost:3000/send-mail"

  constructor(private http: HttpClient) { }
  makeRequest (request: CubeRequest) {
    let body = {
      params: {
        'firstName': request.firstName,
        'lastName': request.lastName,
        'phoneNumber': request.phoneNumber,
        'location': request.location,
        'message': request.message,
        'email': request.email
      }
    }
    console.log(body)
    return this.http.post(this.url, body).subscribe(res=>console.log(res)) ;
  }
}
