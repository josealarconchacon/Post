import { Component } from '@angular/core';

import { NgForm } from '@angular/forms';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css'],
})
export class PostCreateComponent {
  // properties
  enteredTitle = '';
  enteredContent = '';

  constructor(public postService: PostService) {}

  onAddPost(form: NgForm) {
    // validate form
    if (form.invalid) {
      return;
    }
    // emit a new event and pass newPost as a argument
    this.postService.addPost(form.value.title, form.value.content);
  }
}
