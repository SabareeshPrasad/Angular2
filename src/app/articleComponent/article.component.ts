import { Component } from '@angular/core';
/**
 * The below class is a Model class
 * It only created data and send it to the components' class 
**/
class Article{
  title:string;
  link:string;
  vote:number;
  constructor(title:string, link:string, vote:number) {
    this.title = title;
    this.link = link;
    this.vote = vote;
  }
  upvote():boolean {
    this.vote += 1;
    return false;
  }
  downvote():boolean {
    this.vote -= 1;
    return false;
  }
}
@Component({
  selector: 'article',
  template: `
    <div class="article">
      <div *ngFor="let article in articles">
        <div>{{article.title}}</div>
        <div>{{article.link}}</div>
        <div>{{article.vote}} Points </div>
        <div (click)="upVote()">Upvote</div>
        <div (click)="downVote()">Downvote</div>
      </div>
    </div>
  `,
})
export class ArticleComponent {
  articles:Article[];
  constructor() {
    this.articles = [  
      new Article('A2', 'test.com', 0),
      new Article('A4', 'test1.com', 0),
      new Article('A4.3', 'test2.com', 0)
    ];
  }
  upVote():boolean {
    //this.articles.upvote()
    return false;  
  }
  downVote():boolean {
    //this.articles.downvote();  
    return false;
  }
}

