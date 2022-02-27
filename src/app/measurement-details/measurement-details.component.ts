import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-measurement-details',
  templateUrl: './measurement-details.component.html',
  styleUrls: ['./measurement-details.component.css']
})
export class MeasurementDetailsComponent implements OnInit {

  measuringType: any = null;
  startDateTime : any = null;
  endDateTime : any = null;
  tableData : any =null;
  badgeNumber : any = null;

  constructor() { }

  measuringTypes =["KWH","KVAH","KW","KVA"];

  ngOnInit(): void {
    this.badgeNumber = sessionStorage.getItem("badgeNumber");
  }

  onSearch(){
    console.log(this.measuringType,this.startDateTime,this.endDateTime);

    //form req json and call backend api and populate tableData with the reponse as provided below
    this.tableData=[
      {
        "badgeNumber" : "GEOGP6648784",
        "reads" : 151.446,
        "readDttm" : "2020-05-01T00:00:00"
      },
      {
        "badgeNumber" : "GEOGP6648784",
        "reads" : 151.446,
        "readDttm" : "2020-05-01T00:00:00"
      },
      {
        "badgeNumber" : "GEOGP6648784",
        "reads" : 151.446,
        "readDttm" : "2020-05-01T00:00:00"
      },
      {
        "badgeNumber" : "GEOGP6648784",
        "reads" : 151.446,
        "readDttm" : "2020-05-01T00:00:00"
      },

      {
        "badgeNumber" : "GEOGP6648784",
        "reads" : 151.446,
        "readDttm" : "2020-05-01T00:00:00"
      },
      {
        "badgeNumber" : "GEOGP6648784",
        "reads" : 151.446,
        "readDttm" : "2020-05-01T00:00:00"
      },
      {
        "badgeNumber" : "GEOGP6648784",
        "reads" : 151.446,
        "readDttm" : "2020-05-01T00:00:00"
      },
      {
        "badgeNumber" : "GEOGP6648784",
        "reads" : 151.446,
        "readDttm" : "2020-05-01T00:00:00"
      },
      {
        "badgeNumber" : "GEOGP6648784",
        "reads" : 151.446,
        "readDttm" : "2020-05-01T00:00:00"
      },
      {
        "badgeNumber" : "GEOGP6648784",
        "reads" : 151.446,
        "readDttm" : "2020-05-01T00:00:00"
      },

      {
        "badgeNumber" : "GEOGP6648784",
        "reads" : 151.446,
        "readDttm" : "2020-05-01T00:00:00"
      },
      {
        "badgeNumber" : "GEOGP6648784",
        "reads" : 151.446,
        "readDttm" : "2020-05-01T00:00:00"
      },
      {
        "badgeNumber" : "GEOGP6648784",
        "reads" : 151.446,
        "readDttm" : "2020-05-01T00:00:00"
      },
      {
        "badgeNumber" : "GEOGP6648784",
        "reads" : 151.446,
        "readDttm" : "2020-05-01T00:00:00"
      },
      {
        "badgeNumber" : "GEOGP6648784",
        "reads" : 151.446,
        "readDttm" : "2020-05-01T00:00:00"
      },
      {
        "badgeNumber" : "GEOGP6648784",
        "reads" : 151.446,
        "readDttm" : "2020-05-01T00:00:00"
      },

      {
        "badgeNumber" : "GEOGP6648784",
        "reads" : 151.446,
        "readDttm" : "2020-05-01T00:00:00"
      },
      {
        "badgeNumber" : "GEOGP6648784",
        "reads" : 151.446,
        "readDttm" : "2020-05-01T00:00:00"
      }
    ]

  }

  onReset(){
    this.measuringType = null;
    this.startDateTime = null;
    this.endDateTime  = null;
    this.tableData = null;
  }

}
