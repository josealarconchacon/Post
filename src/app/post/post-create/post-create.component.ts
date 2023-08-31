import { Component, EventEmitter, Output } from '@angular/core';

import { Post } from '../post.model';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css'],
})
export class PostCreateComponent {
  // properties
  enteredTitle = '';
  enteredContent = '';

  @Output() postCreatedEventEmitter = new EventEmitter<Post>();

  onAddPost() {
    // create a new post
    const newPost: Post = {
      title: this.enteredTitle,
      content: this.enteredContent,
    };
    // emit a new event and pass newPost as a argument
    this.postCreatedEventEmitter.emit(newPost);
  }
}
