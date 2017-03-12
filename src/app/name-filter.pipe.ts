import { Pipe, PipeTransform } from '@angular/core';
import { News } from './news';

@Pipe({
  name: 'nameFilter'
})

export class NameFilter implements PipeTransform {

  transform(newslist: News[], args: string): any {
    debugger;
    if (newslist)
      return newslist.filter(news => news.title.toLowerCase().indexOf(args.toLowerCase()) !== -1);
    else
      return newslist;
  }

}
