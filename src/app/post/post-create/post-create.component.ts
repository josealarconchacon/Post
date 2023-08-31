import { Component, EventEmitter, Output } from '@angular/core';

import { Post } from '../post.model';
import { NgForm } from '@angular/forms';
import { from } from 'rxjs';

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

  onAddPost(form: NgForm) {
    // validate form
    if (form.invalid) {
      return;
    }
    // create a new post
    const newPost: Post = {
      title: form.value.title,
      content: form.value.content,
    };
    // emit a new event and pass newPost as a argument
    this.postCreatedEventEmitter.emit(newPost);
  }
}
