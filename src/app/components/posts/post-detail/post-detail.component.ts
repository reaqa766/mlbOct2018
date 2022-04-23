import { Component, OnInit } from '@angular/core';

import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import {Post} from '../Post';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
  private postDoc: AngularFirestoreDocument;
  formModel: Post;

  constructor(private afs: AngularFirestore, private route: ActivatedRoute) {}

  update() {
    if (typeof this.postDoc !== "undefined") {
    // TODO throttle update
      this.postDoc.update(this.formModel);
    }
  }

  ngOnInit() {
    this.formModel = {title: '', content: ''};
     // subscribe to the parameters observable
    this.route.paramMap.subscribe(params => {
      this.getPost(params.get('id'));
    });
    
  }
  getPost(postId) {
    this.postDoc = this.afs.doc('posts/' + postId);
    this.postDoc.valueChanges().subscribe(v => {
      this.formModel = v;
    });
  }
}
