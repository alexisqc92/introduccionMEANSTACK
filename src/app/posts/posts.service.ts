import { Injectable } from "@angular/core";
import { Post } from "./post.model";
import { Subject } from "rxjs";

@Injectable({providedIn: 'root'})
export class PostsService {
  private posts: Post[] = [];
  private postsUpdated = new Subject<Post[]>();
  getPost() {
    return [...this.posts];
  }

  getPostUpdatedListener(){
    return this.postsUpdated.asObservable();
  }

  addPost(titulo: string, contenido: string) {
    const post: Post = {titulo:titulo, contenido: contenido};
    this.posts.push(post);
    this.postsUpdated.next([...this.posts]);
  }

}
