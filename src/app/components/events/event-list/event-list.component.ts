import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { EventService } from 'src/app/shared/event.service';


@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {
 events?:any[];
 
  
  constructor(private eventService:EventService,private  toastr: ToastrService) { }
// call when the components is loaded 
  ngOnInit(): void {
    this.events=this.eventService.getEvents();
  }
  
  handleThumbnailClock(eventName:any){
   this.toastr.success(eventName);
  }  

 /* handleEventClicked(data:String){

    console.log('received',data);

  }*/

}
