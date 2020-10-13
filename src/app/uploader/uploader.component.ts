import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'uploader',
  templateUrl: './uploader.component.html',
  styleUrls: ['./uploader.component.scss']
})
export class UploaderComponent implements OnInit{

  name: string = 'Robbe';
  
  isHovering: boolean;

  files: File[] = [];

  ngOnInit() {
    this.name = localStorage.getItem('userName');
    console.log(this.name)
  }

  toggleHover(event: boolean) {
    this.isHovering = event;
  }

  onDrop(files: FileList) {
    for (let i=0; i < files.length; i++) {
      this.files.push(files.item(i));
    }
  }

}