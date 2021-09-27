import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EventService } from 'src/app/shared/event.service';


@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {
 events?:any;
 
  
  constructor(private eventService:EventService,private  toastr: ToastrService,private route:ActivatedRoute) { }
// call when the components is loaded 
  ngOnInit(): void {
    //this.events=this.eventService.getEvents();
/*
    this.eventService.getEvents().subscribe(events=>
      {
        this.events=events
      })*/
    this.events=  this.route.snapshot.data['events'];
      console.log('data', this.route.snapshot.data)
  }
  
  handleThumbnailClock(eventName:any){
   this.toastr.success(eventName);
  }  

 /* handleEventClicked(data:String){

    console.log('received',data);

  }*/

}
