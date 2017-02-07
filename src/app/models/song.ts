export class Song {
    private id: number;
    private album_id: number;
    private title: string;
    private artist: string;
    private songFilePath: string;

    constructor(id:number, albumId:number, title:string, artist:string, songFilePath: string) {
        this.id = id;
        this.album_id = albumId;
        this.title = title;
        this.artist = artist;
        this.songFilePath = songFilePath;
    }

    getId():number{
        return this.id;
    }

    setId(id: number): void {
        this.id = id;
    }

    getAlbumId():number{
        return this.album_id;
    }

    setAlbumId(album_id: number):void{
        this.album_id = album_id;
    }

    getTitle():string{
        return this.title;
    }

    setTitle(title: string): void{
        this.title = title;
    }

    getArtist():string{
        return this.artist;
    }

    getSongFilePath():string{
        return this.songFilePath;
    }

    setSongFilePath(songFilePath:string):void{
        this.songFilePath = songFilePath;
    }
}
