import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-list-posts',
  templateUrl: './list-posts.component.html',
  styleUrls: ['./list-posts.component.css']
})
export class ListPostsComponent {
  /* postList = [
    {titulo: 'Primer Post', contenido: 'Contenido del primer post'},
    {titulo: 'Segundo Post', contenido: 'Contenido del segundo post'},
    {titulo: 'Tercero Post', contenido: 'Contenido del tercer post'}
  ] */

  @Input() postList = [];
}
