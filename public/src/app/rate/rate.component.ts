import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-rate',
  templateUrl: './rate.component.html',
  styleUrls: ['./rate.component.css']
})
export class RateComponent implements OnInit {
  @Input() shows: [];
  @Output() aTaskEventEmitter = new EventEmitter();
  @Output() newRatings = new EventEmitter();
  newRating : any

  @Input('ngModelOptions')
options: {
    name?: string;
    standalone?: true;
}

  constructor() { }

  ngOnInit() {
    this.newRating = {value : [], comment : []}
  }

  triggerEvent(showId){
    //  2b. Emit the Event
 this.aTaskEventEmitter.emit(showId); //we can pass in any data type
}

 submitRating(showId, name){

   let rating = {
    value : this.newRating.value[showId], 
    comment : this.newRating.comment[showId]
  }

  let resultArr = [name, rating];
  // console.log(resultArr)

  this.newRatings.emit(resultArr);
  
 }


}