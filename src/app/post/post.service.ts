import { Injectable } from '@angular/core';
import { Post } from './post.model';

// @Injectable() decorator defines a class as a service in Angular and allows Angular to inject it into a component as a dependency
@Injectable({ providedIn: 'root' })
export class PostService {
  // store a list of posts
  private posts: Post[] = [];

  // method
  getPosts() {
    // copy posts from the original post array
    return [...this.posts];
  }

  addPost(title: string, content: string) {
    const post = { title: title, content: content };
    this.posts.push(post);
  }
}
