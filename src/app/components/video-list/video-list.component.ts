/**
 * @author Vaibhav Shringarpure
 * @email vibs.sh@gmail.com
 * @create date 2018-07-25 
 * @modify date 2018-07-25
 * @desc [Video List Component TS File]
*/
import { Component, OnInit } from '@angular/core';

import { FetchvideosService } from '../../service/fetchvideos.service';
import { HttpParams } from '@angular/common/http';

@Component({
    selector: 'bynd-video-list',
    templateUrl: './video-list.component.html',
    styleUrls: ['./video-list.component.scss']
})
export class VideoListComponent implements OnInit {
    
    videoList : any[]= [];

    objProps;

    params = new HttpParams();

    currentStyles: {};
    
    isThumbnail: boolean = true;
    
    constructor(private videoService: FetchvideosService) {}

    ngOnInit() {
        this.getAllList(this.params);
    }

    getAllList(params) { 
        this.videoService
          .getList(params)
          .subscribe((data)=>{
              let d = [data];
              for(let i=0; i<d.length; i++){
                  this.videoList = d[i]["items"];
              }
              console.log(this.videoList);
          });
    }
}
