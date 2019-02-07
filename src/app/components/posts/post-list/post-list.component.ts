import { Component, OnInit } from '@angular/core';

import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { ActivatedRoute, ParamMap } from '@angular/router';
 

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  private postDoc: AngularFirestoreDocument;
  post: any;

  constructor(private afs: AngularFirestore, private route: ActivatedRoute) {
  }

  ngOnInit(){
    this.route.paramMap.subscribe(params => {
      this.getPost(params.get('id'));
    });
}
getPost(postId) {
  this.postDoc = this.afs.doc('posts/' + postId);
  this.post = this.postDoc.valueChanges();
}
}
