import { Component, Input, OnInit } from '@angular/core';
import { Article } from 'src/app/interfaces/Articles';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input()
  public article: Article = null;

  constructor() { }

  ngOnInit(): void {
  }

}
