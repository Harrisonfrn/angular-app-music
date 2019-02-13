import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Album } from 'src/app/album';
import { AlbumService } from '../album.service';

import{ ALBUM_LISTS } from '../mock-albums';

@Component({
  selector: 'app-album-details',
  templateUrl: './album-details.component.html',
  styleUrls: ['./album-details.component.scss']
})
export class AlbumDetailsComponent implements OnInit {
  @Input() album:Album;
  @Output() onPlay: EventEmitter<Album> = new EventEmitter();
  albumList = ALBUM_LISTS;

  songs: Array<string> = [];

  constructor() { }

  ngOnInit() { }

  // dès que quelque chose "rentre" dans le component enfant via une propriété Input
  // ou à l'initialisation du component (une fois) cette méthode est appelée
  ngOnChanges() {
    // on vérifie que l'on a bien cliqué sur un album avant de rechercher dans la liste
    // des chansons.
    if(this.album){
      // récupération de la liste des chansons
      this.songs = this.albumList.find(elem => elem.id === this.album.id).list;
    }
   
  }

  play(album: Album) {
    this.onPlay.emit(album); // émettre un album vers le parent
  }

}
