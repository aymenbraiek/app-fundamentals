import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventAddComponent } from './components/events/add/event-add/event-add.component';
import { EventDetailsComponent } from './components/events/event-details/event-details/event-details.component';
import { EventListComponent } from './components/events/event-list/event-list.component';

const routes: Routes = [
{path:'events/new',component:EventAddComponent},
{path:'events',component:EventListComponent},
{path:'events/:id',component:EventDetailsComponent},
{path:'',redirectTo:'/events',pathMatch:'full'},
]
;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
