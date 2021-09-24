import { Component, Input, OnInit } from '@angular/core';
import { EventService } from 'src/app/shared/event.service';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {
//@Input() event:any;
event:any;
  constructor(private eventService:EventService) { }

  ngOnInit() {

    this.event=this.eventService.getEvent(1);
    console.log('event',this.event)

  }

}
