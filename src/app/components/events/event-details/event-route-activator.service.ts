import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { EventService } from 'src/app/shared/event.service';

@Injectable({
  providedIn: 'root'
})
export class EventRouteActivatorService implements CanActivate{

constructor(private eventService:EventService,private router:Router) { }


  canActivate(route: ActivatedRouteSnapshot){
  const eventExists=  !!this.eventService.getEvent(+route.params['id']);
  if(!eventExists)
  this.router.navigate(['/404'])
  return eventExists;
  }

}
