import { Component, OnInit } from '@angular/core';
import { SongService } from '../services/song.service';
import { Song } from '../models/song';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  songService: SongService;
  songs: Song[];

  constructor(songService:SongService) {
    this.songService = songService;
  }

  ngOnInit() {
    this.songs = this.songService.getAllSongs();
  }

}
