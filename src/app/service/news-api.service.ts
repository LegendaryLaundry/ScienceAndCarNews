import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs/';

@Injectable({
  providedIn: 'root'
})
export class NewsAPIService {

  constructor(private _http: HttpClient) { }

  newsApiUrl = "https://inshorts.deta.dev/news?category=science";


  header():Observable<any> {
    return this._http.get(this.newsApiUrl)
  }
}
