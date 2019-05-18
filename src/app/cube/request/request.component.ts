import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CubeRequest } from '../../models/CubeRequest';
import { RequestService } from '../../services/request.service';
@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.scss']
})
export class RequestComponent implements OnInit {

requestSent: boolean = false;

firstName: string;
lastName: string;
email: string;
location: string;
phoneNumber: string;
message: string;
  constructor(private requestService: RequestService, private router: Router ) { }

  ngOnInit() {
  }
  makeRequest()  {
    var request: CubeRequest = {
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      location: this.location,
      phoneNumber: this.phoneNumber,
      message: this.message
    }
    this.requestService.makeRequest(request: CubeRequest).subscribe((res)= {
        // res ? requestSent = true
        //this.router.navigateTo('');
    });
  }


}
