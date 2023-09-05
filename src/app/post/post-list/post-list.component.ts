import { Component, Input } from '@angular/core';

import { Post } from '../post.model';
import { PostService } from '../post.service';

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

  // Properties
  // Bind to postList from the parent component AppComponent()
  @Input() postList: Post[] = [];
  postService: PostService;

  constructor(public postsService: PostService) {
    this.postService = postsService;
  }
}
