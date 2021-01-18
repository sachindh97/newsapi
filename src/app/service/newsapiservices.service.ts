import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class NewsapiservicesService {
  constructor(private _http:HttpClient) { }
  //newsapiurl
  newsApiUrl = "https://newsapi.org/v2/top-headlines?country=in&apiKey=enterapikeyhere";
  // technewsapiurl
  techApiUrl = "https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=enterapikeyhere";
    // businessnewsapiurl
    businessApiUrl = "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=enterapikeyhere";

  //topheading()
  topHeading():Observable<any>
  {
    return this._http.get(this.newsApiUrl);
  }

  // technews()
  techNews():Observable<any>
  {
    return this._http.get(this.techApiUrl);
  }
// businssnews()
  businessNews():Observable<any>
  {
    return this._http.get(this.businessApiUrl);
  }

}
