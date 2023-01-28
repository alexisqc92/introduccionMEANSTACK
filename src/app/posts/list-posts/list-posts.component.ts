import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';
import { Post } from '../post.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-list-posts',
  templateUrl: './list-posts.component.html',
  styleUrls: ['./list-posts.component.css']
})
export class ListPostsComponent implements OnInit, OnDestroy {
  /* postList = [
    {titulo: 'Primer Post', contenido: 'Contenido del primer post'},
    {titulo: 'Segundo Post', contenido: 'Contenido del segundo post'},
    {titulo: 'Tercero Post', contenido: 'Contenido del tercer post'}
  ] */

  postList: Post[] = [];
  private postSubs: Subscription;
  constructor(public postsService: PostsService) {}

  ngOnInit (): void {
    this.postList = this.postsService.getPost();
    this.postSubs = this.postsService.getPostUpdatedListener().subscribe((posts: Post[])=>{
      this.postList = posts;
    })
  }

  ngOnDestroy(): void {
    this.postSubs.unsubscribe()
  }
}
