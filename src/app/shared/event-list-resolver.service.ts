import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { EventService } from './event.service';
import {map} from 'rxjs/operators';
 
@Injectable({
  providedIn: 'root'
})
export class EventListResolverService implements Resolve<any>{

constructor(private eventService:EventService) { }

  resolve() {
    //pipe return observable map acces to element of stream 
   return this.eventService.getEvents().pipe(map(events=>events))
  }

}
