import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './components/errors/error/error.component';
import { EventAddComponent } from './components/events/add/event-add/event-add.component';
import { EventDetailsComponent } from './components/events/event-details/event-details/event-details.component';
import { EventRouteActivatorService } from './components/events/event-details/event-route-activator.service';
import { EventListComponent } from './components/events/event-list/event-list.component';
import { EventListResolverService } from './shared/event-list-resolver.service';
//conflit entre  events/new && events/:id mettre path of new event first statement 
const routes: Routes = [
  //canDeactivate two method to define canDeactivate =function or service 
{path:'events/new',component:EventAddComponent,canDeactivate:['canDeactivateCreateEvent']},
{path:'events',component:EventListComponent,resolve:{events:EventListResolverService}},
{path:'events/:id',component:EventDetailsComponent,canActivate:[EventRouteActivatorService]},
{path:'',redirectTo:'/events',pathMatch:'full'},
{path:'404',component:ErrorComponent}
]
;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
