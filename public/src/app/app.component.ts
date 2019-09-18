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

  constructor(private _httpService: HttpService) {
    this.newShow = { title: "", image: "" }
  }

  ngOnInit(): void {
    // runs when the web app first runs
  }

  onSubmit() {
    // Code to send off the form data (this.newTask) to the Service
    console.log(this.newShow)
    let observable = this._httpService.addShow(this.newShow);
    // Reset this.newTask to a new, clean object.
    observable.subscribe(data => {
      console.log('gottem', data)
      this.newShow = { title: "", description: "" }
    })
  }

}
