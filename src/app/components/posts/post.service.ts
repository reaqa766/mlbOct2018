import { Injectable } from '@angular/core';

import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
} from 'angularfire2/firestore';

import { Post } from './Post'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class PostService {
  postsCollection: AngularFirestoreCollection<Post>
  postDoc: AngularFirestoreDocument<Post>

  constructor(private afs: AngularFirestore) {
    this.postsCollection = this.afs.collection('posts', ref =>
      ref.orderBy('published', 'desc')
    )
  }

  getPosts() {
    this.postsCollection.snapshotChanges().pipe(map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Post
        const id = a.payload.doc.id;
        return { id, ...data }
      });
    }
    )).subscribe();
    // return this.postsCollection.snapshotChanges().pipe.map(actions => {
    //   return actions.map(a => {
    //     const data = a.payload.doc.data() as Post
    //     const id = a.payload.doc.id
    //     return { id, ...data }
    //   })
  }

  // getPostData(id: string) {
  //   this.postDoc = this.afs.doc<Post>(`posts/${id}`)
  //   return this.postDoc.valueChanges()
  // }

  // getPost(id: string) {
  //   return this.afs.doc<Post>(`posts/${id}`)
  // }

  // create(data: Post) {
  //   this.postsCollection.add(data)
  // }

  // delete(id: string) {
  //   return this.getPost(id).delete()
  // }

  // update(id: string, formData) {
  //   return this.getPost(id).update(formData)
  // }
}
