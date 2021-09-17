import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NewsResponse } from 'src/app/interfaces/NewsResponse';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  private newsURL: string = "https://newsapi.org/v2/top-headlines/sources?apiKey=bb30c85131bc49d1a418b3434f81feb4";
  private secondURL: string = "https://newsapi.org/v2/everything?domains=wsj.com&apiKey=bb30c85131bc49d1a418b3434f81feb4";

  constructor(private http: HttpClient) { }

  /**
   * Fetching news API.
   * @returns All the top-headlines.
   */
  public getTopHeadLines(): Observable<NewsResponse> {
    return this.http.get<NewsResponse>(this.newsURL);
  }

  /**
 * Fetching news API.
 * @returns All the top-headlines.
 */
  public getEverything(): Observable<NewsResponse> {
    return this.http.get<NewsResponse>(this.secondURL);
  }
}
