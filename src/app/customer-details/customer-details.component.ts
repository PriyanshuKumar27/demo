import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    //api call and save the response in an object and interpolate in UI
    sessionStorage.setItem("badgeNumber" , "GOEGP6648784") //store badge number in session storage
  }

}
