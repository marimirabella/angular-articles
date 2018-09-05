import { Component } from '@angular/core';

import { Article } from './article/article.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  articles: Article[];

  constructor() {
    this.articles = [
      new Article('Angular 6', 'http://angular.io', 3),
      new Article('MDN Web Docs', 'https://developer.mozilla.org/', 4),
      new Article('Angular HomePage', 'http://angular.io', 1),
    ];
  }

  sortedArticles(): Article[] {
    return this.articles.sort((a: Article, b: Article) => b.votes - a.votes);
  }

  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
    this.articles = [...this.articles, new Article(title.value, link.value, 0)];
    title.value = '';
    link.value = '';
    return false;
  }
}
