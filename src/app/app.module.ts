import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventsComponent } from './components/events/events.component';
import { EventListComponent } from './components/events/event-list/event-list.component';
import { EventThumbnailComponent } from './components/events/event-thumbnail/event-thumbnail.component';
import { NavbarComponent } from './components/nav/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    EventsComponent,
  EventListComponent,
  EventThumbnailComponent,
  NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
