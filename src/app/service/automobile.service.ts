import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs/';

@Injectable({
  providedIn: 'root'
})
export class AutomobileAPIService {

  constructor(private _http: HttpClient) { }

  automobileApiUrl = "https://inshortsapi.vercel.app/news?category=automobile";


  header():Observable<any> {
    return this._http.get(this.automobileApiUrl)
  }
}
