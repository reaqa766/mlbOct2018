import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';


import { PostService } from '../post.service'
import { Post } from '../Post'
import {AuthService } from '../../../services/auth.service';


@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  posts: Observable<Post[]>
  constructor(private postService: PostService, public auth: AuthService) {}

  ngOnInit() {
    this.posts= this.postService.getPosts().subscribe(result => this.posts = result);
        // this.postService.getPosts().subscribe(posts => {
      console.log(this.posts);
    //   this.posts = posts;
    
  }

  // delete(id: string) {
  //   this.postService.delete(id)
  // }

}
