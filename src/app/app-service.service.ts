import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { News } from './news';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class AppService {

  constructor(public http: Http) { }

  getArticles(): Observable<News[]> {
    return this.http.get("http://starlord.hackerearth.com/edfora/hackernews")
      .map(res => res.json());
  }
}
