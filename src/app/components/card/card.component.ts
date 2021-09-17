import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Article } from 'src/app/interfaces/Articles';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input()
  public article: Article = null;

  @ViewChild('closeBtn') input: ElementRef<HTMLInputElement>;

  @ViewChild('card') card: ElementRef<HTMLDivElement>;

  constructor() { }

  ngOnInit(): void {
  }

  public close(): void {
    this.card.nativeElement.style.display = "none";
  }

  public redirectToNews(event: Event): void {
    location.replace(this.article.url);
  }

}
