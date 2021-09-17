import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/interfaces/Articles';
import { NewsResponse } from 'src/app/interfaces/NewsResponse';
import { DashboardService } from './dashboard.service';
import { filter, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { SearchService } from 'src/app/services/search.service';
import { SpinnerService } from '../spinner/spinner.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public ishttpLoaded:boolean = false;
  /**
   * Get the articles from the news response.
   */
  public articles: Observable<Article[]> =
    this.dashboardService
      .getEverything()
        .pipe(map((result: NewsResponse) => {
          return result.articles;
      }));


  public searchedArticles: Observable<Article[]> = this.searchService.search(this.articles);

  constructor(
    private dashboardService: DashboardService,
    private searchService: SearchService
  ) { }

  ngOnInit(): void {
  }

}
