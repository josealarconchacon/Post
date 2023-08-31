import { Component } from '@angular/core';

import { Post } from './post/post.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // create an empty array to store new post
  storedPost: Post[] = [];

  onPostAdded(post) {
    this.storedPost.push(post);
  }
}
