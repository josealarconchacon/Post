import { Component } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
})
export class PostListComponent {
  // dummy data test
  // postList = [
  //   { title: 'Post 1', content: 'Content of post #1' },
  //   { title: 'Post 2', content: 'Content of post #2' },
  //   { title: 'Post 3', content: 'Content of post #3' },
  // ];

  postList = [];
}
