import { Injectable } from '@angular/core';
import { Song } from '../models/song';

@Injectable()
export class SongService {

  constructor() { }

  getAllSongs():Song[]{
    return [new Song(1, 1, `Arjun`, `Karthik`,`/media/prashanth/body/Music/Arjun/say.mp3`)];
  }

}
