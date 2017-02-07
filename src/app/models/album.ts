import { Song } from './song';

export class Album {
    id: number;
    songs: Song[];
    name: string;
    albumArtPath: string;
    albumArtist: string;
    year: number;

    constructor(id:number, name:string, songs:Song[], albumArtist:string, albumArtPath:string, year:number){
        this.id = id;
        this.name = name;
        this.songs = songs;
        this.albumArtist = albumArtist;
        this.albumArtPath = albumArtPath;
        this.year = year;
    }

    // getAlbumArtPath(): string {
    //     return this.albumArtPath;
    // }

    // setAlbumArtPath(albumArtPath: string): void {
    //     this.albumArtPath = albumArtPath;
    // }
}