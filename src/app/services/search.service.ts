import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { debounceTime, delay, distinctUntilChanged, filter, map, shareReplay, switchMap } from 'rxjs/operators';
import { Article } from '../interfaces/Articles';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  public searchTerm$ = new BehaviorSubject<string>(undefined);

  constructor() { }

  search(collectionObs: Observable<Article[]>): Observable<Article[]> {
    const result = this.searchTerm$.pipe(
      distinctUntilChanged(),
      debounceTime(400),
      switchMap(searchedTerm => this.doSearch(collectionObs, searchedTerm)),
      shareReplay(1)
    );

    return result;
  }

  private doSearch(collectionObs: Observable<Article[]>, term: string): Observable<Article[]> {
    return collectionObs.pipe(
      map((articles: Article[]) => {
        if(!term) {
          return articles;
        }

        const res = articles.filter((article: Article) => {
          const title = article.title.toLowerCase();
          term = term.toLowerCase();

          return title.includes(term);
        });
        return res;
      })
    );
  }

}
