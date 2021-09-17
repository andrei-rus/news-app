import { Component, OnInit } from '@angular/core';
import { faNewspaper } from '@fortawesome/free-solid-svg-icons';
import { Subject } from 'rxjs';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public faNewspaper = faNewspaper;
  public title: string = 'News App';

  public searchTerm$ = new Subject<string>();

  constructor(private searchService: SearchService) { }

  ngOnInit(): void {
  }

  public onChange(e: Event): void {
    const searchedString = (e.target as any).value;
    this.searchService.searchTerm$.next(searchedString);
  }
}
