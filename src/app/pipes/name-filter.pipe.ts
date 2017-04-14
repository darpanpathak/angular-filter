import { Pipe, PipeTransform } from '@angular/core';
import { News } from '../models/news';

@Pipe({
  name: 'nameFilter'
})

export class NameFilter implements PipeTransform {

  transform(newslist: News[], args: string): any {
    if (newslist)
      return newslist.filter(news => news.title.toLowerCase().indexOf(args.toLowerCase()) !== -1);
    else
      return newslist;
  }

}
