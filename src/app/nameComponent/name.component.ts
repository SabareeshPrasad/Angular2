import { Component } from '@angular/core';

@Component({
  selector: 'name',
  template: `
    <form>
      <label> Title </label>
      <input type="text" #title />
      <label> Link </label>
      <input type="text" #link/>
      <button (click)="addNewdetails(title, link)">Submit </button>
      <article></article>
    </form>`,
})
export class NameComponent {
  title:string;
  addNewdetails(title:HTMLInputElement, link:HTMLInputElement):boolean {
    console.log(`${title.value} title ${link.value} link`);
    return false;
  }
  constructor() {
    this.title = "Sabareesh Prasad";
  }
}

@Component({
  selector : 'article',
  template : `
  	<div> {{votes}}</div>
  	<div> {{title}} </div>
  	<div> {{link}} </div>
  	<div (click)="articleUpVote(votes)"> {{Upvote}} Upvote</div>
  	<div (click)="articleDownVote(votes)"> {{Downvote}} Downvote</div>
  `	,
})
export class ArticleComponent{
  votes:number;
  title:string;
  link:string;
  articleUpVote(vote:number) {
    this.votes = vote+1;
    console.log('Upvote')
    return false
  }
  articleDownVote(vote:number) {
    this.votes = vote-1;
    return false
  }
  constructor() {
    this.votes = 10;
    this.title = "Sabareesh";
    this.link = "test.com"
  }	
}