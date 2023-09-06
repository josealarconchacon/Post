import { Component, Input, OnInit } from '@angular/core';

import { Post } from '../post.model';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
})
export class PostListComponent implements OnInit {
  // dummy data test
  // postList = [
  //   { title: 'Post 1', content: 'Content of post #1' },
  //   { title: 'Post 2', content: 'Content of post #2' },
  //   { title: 'Post 3', content: 'Content of post #3' },
  // ];

  // Properties
  // Bind to posts from the parent component AppComponent()
  @Input() posts: Post[] = [];

  constructor(public postsService: PostService) {}

  ngOnInit(): void {
    this.posts = this.postsService.getPosts();
  }
}
