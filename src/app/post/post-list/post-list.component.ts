import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { Post } from '../post.model';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
})
export class PostListComponent implements OnInit, OnDestroy {
  posts: Post[] = [];
  private postsSubscription: Subscription;

  constructor(public postsService: PostService) {}

  ngOnInit(): void {
    this.posts = this.postsService.getPosts();
    // set a listener to the subject
    this.postsSubscription = this.postsService
      .getPostUpdatedListener()
      .subscribe((posts: Post[]) => {
        this.posts = posts;
      });
    console.dir('The post: ', this.posts);
  }
  ngOnDestroy(): void {
    this.postsSubscription.unsubscribe();
  }
}
