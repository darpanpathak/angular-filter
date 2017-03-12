import { Component, OnInit } from '@angular/core';
import { AppService } from '../app-service.service'
import { News } from '../news';
import { NameFilter } from '../name-filter.pipe';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']

})
export class DashboardComponent implements OnInit {

  public newslist: News[];
  public title: string = "";

  constructor(public appservice: AppService) { }

  ngOnInit() {
    this.appservice.getArticles().subscribe(news => {
      this.newslist = news;
      this.newslist.splice(0, 1);
    })
  }

}
