import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  title = 'RATE TV SHOW';
  newShow: any
  allShows = []
  displayShow: any

  constructor(private _httpService: HttpService) {
    this.newShow = { title: "", image: "" }
  }

  dataFromChild(eventData){
    console.log(eventData)
    let observable = this._httpService.getOne(eventData);
    observable.subscribe(data => {
      // console.log(data)
      this.displayShow = data
     })

  }

  newRatingInput(resultArr){
    for(let key in resultArr[1]){
      if(key == "value"){
        resultArr[1].value = resultArr[1].value.charAt(0);
      }
    }
    let observable = this._httpService.addRating(resultArr[0], resultArr[1]);
    observable.subscribe(data => {
      // console.log(data)
     })
  }

  ngOnInit(): void {
    // runs when the web app first runs
    this.getAllShows();
  }

  onSubmit() {
    // Code to send off the form data (this.newTask) to the Service
    console.log(this.newShow)
    let observable = this._httpService.addShow(this.newShow);
    // Reset this.newTask to a new, clean object.
    observable.subscribe(data => {
      this.allShows = []
      console.log('gottem', data)
      this.newShow = { title: "", description: "" }
    })
    this.getAllShows();
  }

  getAllShows() {
    // calling our get Pokemon method and receive an observable
    let observable = this._httpService.getShows()
    observable.subscribe(data => {
      // put all shows from call into allShows array
      for(let show of data){
          this.allShows.push(show)
      }
    })
    // console.log(this.allShows)
  }

  // getAverage(showId){
  //   let total = 0
  //   let length: any
  //   let observable = this._httpService.getOne(showId)
  //   observable.subscribe(data => {
  //     length = data.rate.length
  //     // put all shows from call into allShows array
  //     for(let key in data.rate){
  //         if(key == "value"){
  //           total+= data.rate.key
  //         }
  //     }
  //   })
  //   return total/length
  // }

}
