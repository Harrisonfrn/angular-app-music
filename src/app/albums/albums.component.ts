import { Component, OnInit } from '@angular/core';

// Importez la définition de la classe et les albums
import { Album } from '../album';
import { ALBUMS } from '../mock-albums';
import { AlbumService } from 'src/app/album.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent implements OnInit {

  titlePage: string = "Tutube";
  albums: Album[] = ALBUMS;
  selectedAlbum : Album;
  status: string = null; // pour gérer l'affichage des caractères [play] 

  constructor(private ablumService: AlbumService) {
    this.ablumService.getAlbums();
   }

  ngOnInit() {
  }

  onSelect(album : Album){
    //console.log(album);

    this.selectedAlbum = album;
  }

  playParent($event){
    this.status = $event.id; // identifiant unique
  }

}
