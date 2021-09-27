import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventService } from 'src/app/shared/event.service';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {
//@Input() event:any;
event:any;
id?:any;


  constructor(private eventService:EventService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.event=this.eventService.getEvent(1);
    //this.event=this.eventService.getEvent(this.route.snapshot.params.id);
    console.log('event data',this.event)
    this.route.paramMap.subscribe(params => { 
      console.log(params);
       this.id = params.get('id'); 
       let events=this.eventService.getEvents();
       this.event=events.find(p => p.id==this.id);    
   });

  }
  

  

}
