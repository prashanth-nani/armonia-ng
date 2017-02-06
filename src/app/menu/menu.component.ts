import { Component, OnInit } from '@angular/core';
import * as mm from 'musicmetadata';
// const mm = require('musicmetadata');
import { join } from 'path';
import * as fs from 'fs';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  title: string = 'Loading...';
  files: string[];

  constructor() {
   this.metadata(`/media/prashanth/body/Music/Arjun/say.mp3`)
  .then((md)=>{
     this.title = md.title;
   })
   .catch((err)=>{
     this.title = "Error";
   })
    this.files = fs.readdirSync('/media/prashanth/body/Music/Arjun');
    console.log(this.files);
  }

  metadata(path: string):Promise<MM.Metadata>{
    return new Promise<MM.Metadata>((resolve, reject)=>{
         mm(fs.createReadStream(path), (err, metadata)=>{
           if(err)
              reject("Error occured");
            else
              resolve(metadata);
         });
    })

  }

  ngOnInit() {
  }

}
