import { Component, OnInit } from '@angular/core';
import { News } from '../../models/news';
import { AppService } from '../../providers/app-service.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-newsdetails',
  templateUrl: './newsdetails.component.html',
  styleUrls: ['./newsdetails.component.css']
})
export class NewsdetailsComponent implements OnInit {
  public news: News;
  public newsid: Number;

  constructor(public _appService: AppService, public route: ActivatedRoute, public router: Router) { }

  ngOnInit() {

    this.route.params.subscribe(
      (params: Params) => {
        this.newsid = params["id"];

        this.getArticleDetails(this.newsid);
      }
    );

  }

  getArticleDetails(id) {
    this._appService.getArticleDetails(id).subscribe(n => {
      this.news = n;
    });
  }

  goBack() {
    this.router.navigate(['/dashboard']);
  }

}
