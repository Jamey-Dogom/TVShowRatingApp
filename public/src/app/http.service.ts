import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient){}

  // Get all shows
  getShows(){
    // our http response is an Observable, store it in a variable
    return this._http.get('/shows');
    // subscribe to the Observable and provide the code we would like to do with our data from the response
    // tempObservable.subscribe(data => console.log("Got our tasks!", data));
 }


  // Create One New Show
  addShow(newShow){
    return this._http.post('/shows', newShow)
  }

}
