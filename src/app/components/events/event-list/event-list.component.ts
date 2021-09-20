import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {
 
  constructor() { }

  ngOnInit(): void {
  }
  event1={
    id:1,
    name:'angular connect',
    date:'9/26/2036',
    time:'angular Connect',
    price:599.99,
    location:{
      address:'1057 DT',
      city:'London',
      country:'England'

    }


  }

 /* handleEventClicked(data:String){

    console.log('received',data);

  }*/

}
