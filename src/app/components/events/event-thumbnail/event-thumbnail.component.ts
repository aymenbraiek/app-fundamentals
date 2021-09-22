import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-event-thumbnail',
  templateUrl: './event-thumbnail.component.html',
  styleUrls: ['./event-thumbnail.component.css']
})
export class EventThumbnailComponent implements OnInit {
@Input() event:any;
//@Output() eventClick =new EventEmitter();
  constructor() { }

  //return object first method  used ngClass
/*  getStartTimeClass(){
    const isEarlyStart=this.event && this.event.time === '9:00 am';
    return {green:isEarlyStart}
    
  }*/
  //return string  second method  used ngClass
  /*getStartTimeClass(){
  if(this.event.time === '9:00 am' && this.event)
  return 'green'
  return ''
  }*/
  //return array  thirty method used to ngClass
  getStartTimeClass(){
    if(this.event.time === '9:00 am' && this.event)
    return ['green','bold']
    return []
  }
  ngOnInit(): void {
  }

/*  logFoot(){
    console.log('fooo');
  }*/

 /* handleClickMe(){
   this.eventClick.emit(this.event.name);
  }*/

}
