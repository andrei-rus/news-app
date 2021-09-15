import { Component, OnInit } from '@angular/core';
import { faNewspaper } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public faNewspaper = faNewspaper;
  public title: string = 'News App';

  constructor() { }

  ngOnInit(): void {
  }

}
