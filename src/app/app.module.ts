import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { ContentComponent } from './content/content.component';
import { PlayerComponent } from './player/player.component';
import { ContainerComponent } from './container/container.component';

import {SongService } from './services/song.service';
import { AlbumComponent } from './album/album.component';
import { SongListComponent } from './song-list/song-list.component';
import { AlbumListComponent } from './album-list/album-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ContentComponent,
    PlayerComponent,
    ContainerComponent,
    AlbumComponent,
    SongListComponent,
    AlbumListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [SongService],
  bootstrap: [AppComponent]
})
export class AppModule { }
