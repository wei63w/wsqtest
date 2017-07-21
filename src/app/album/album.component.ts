import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {

  constructor() { }
  changeEle1() {
    document.getElementById("sub1").style.display="inline";
    document.getElementById("sub2").style.display="none";
  }
  changeEle2() {
    document.getElementById("sub1").style.display="none";
    document.getElementById("sub2").style.display="inline";
  }



  ngOnInit() {

  }

}
