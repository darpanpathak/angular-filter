import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { News } from '../models/news';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class AppService {

  constructor(public http: Http) { }

  getArticles(): Observable<News[]> {
    return this.http.get("http://starlord.hackerearth.com/edfora/hackernews")
      .map(res => res.json());
  }

  getArticleDetails(id): Observable<News> {
    return this.http.get("http://starlord.hackerearth.com/edfora/hackernews")
      .map(res => {
        var newsarr = res.json();
        var filteredarr = newsarr.filter(news => news.id === Number(id));
        return filteredarr.length == 0 ? null : filteredarr[0];
      });
  }
}
