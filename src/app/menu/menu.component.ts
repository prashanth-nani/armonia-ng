import { Component, OnInit } from '@angular/core';
import * as mm from 'musicmetadata';
// const mm = require('musicmetadata');
import { join } from 'path';
import * as fs from 'fs';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  title: string = 'don';
  files: string[];

  constructor() { 
    console.log("Hello world");
   this.metadata(`/media/prashanth/body/Music/Arjun/say.mp3`).then((title)=>{
     this.title = title;
   }).catch((err)=>{
     this.title = "Error";
   })
    // this.title = 'seenu';
    this.files = fs.readdirSync('/media/prashanth/body/Music/Arjun');
    console.log(this.files);
  }

  metadata(path: string):Promise<string>{
    return new Promise<string>((resolve, reject)=>{
         mm(fs.createReadStream(path), (err, metadata)=>{
           if(err)
              reject("Error occured");
            else
              resolve(metadata.title);
         });
    })

  }

  ngOnInit() {
  }

}
