import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventsComponent } from './components/events/events.component';
import { EventListComponent } from './components/events/event-list/event-list.component';
import { EventThumbnailComponent } from './components/events/event-thumbnail/event-thumbnail.component';
import { NavbarComponent } from './components/nav/navbar/navbar.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EventDetailsComponent } from './components/events/event-details/event-details/event-details.component';
import { EventAddComponent } from './components/events/add/event-add/event-add.component';
import { ErrorComponent } from './components/errors/error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    EventsComponent,
  EventListComponent,
  EventThumbnailComponent,
  NavbarComponent,
  EventDetailsComponent,
  EventAddComponent,
  ErrorComponent

  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ToastrModule.forRoot( ),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
