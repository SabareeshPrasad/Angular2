import { Component } from '@angular/core';
// Common Model
class Article{
  title:string;
  link:string;
  vote:number;
  constructor(title:string, link:string, vote:number) {
    this.title = title;
    this.link = link;
    this.vote = vote;
    console.log('title' + title);
    console.log('link' + link);
    console.log('vote' + vote);
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
// Articles Components
@Component({
  selector: 'application-article',
  inputs: ['article'],
  template: `
    <div class="article">
        <div>{{article.title}}</div>
        <div>{{article.link}}</div>
        <div>{{article.vote}} + Points </div>
        <div (click)="upVote()">Upvote</div>
        <div (click)="downVote()">Downvote</div>
    </div>
  `,
})
// Articles Components Export
export class ArticleComponent {
  article:Article;
  upVote():boolean {
    this.article.upvote()
    return false;  
  }
  downVote():boolean {
    this.article.downvote();  
    return false;
  }
}
// Application Components
@Component({
  selector: 'application',
  template: `
    <form name="article">
      <input type="text" #title />
      <input type="link" #link />
      <button (click)="addNewArticle(title, link)"> Submit </button>
    </form>
    <application-article *ngFor="let article of articles" [article]="article"></application-article>
  `,
})
// Application Components Export
export class ApplicationComponent {
  articles:Article[];
  constructor() {
    this.articles = [  
      new Article('A2', 'test.com', 0),
      new Article('A4', 'test1.com', 0),
      new Article('A4.3', 'test2.com', 0)
    ];
    console.log('app const');
    console.log(this.articles);
  }
  addNewArticle(title:HTMLInputElement, link:HTMLInputElement):boolean {
    //this.articles.push();
    this.articles.push(new Article(title.value, link.value, 0));
    console.log(`title ${title.value} link ${link.value}`);
    title.value= "";
    link.value= "";
    console.log(`title ${title.value} link ${link.value}`);
    return false;
  }
  sortedArticles():Article[] {
    return this.articles.sort((a:Article, b:Article)=>b.vote - a.vote);
  }
}