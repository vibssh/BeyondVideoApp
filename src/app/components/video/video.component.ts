import { Component, OnInit } from '@angular/core';

import {FetchvideosService} from '../../service/fetchvideos.service';

import {ActivatedRoute} from '@angular/router';

import { SafePipe } from "../../SafePipe";

@Component({
  selector: 'bynd-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {

    public video: any[] = [];
    public title: string;
    public pubDate: Date;
    public videoText: string;
    public iFrameUrl;
    
    constructor(private route: ActivatedRoute, private videoService: FetchvideosService){}

    ngOnInit() {
        this.getVideo();
    }

    getVideo() {
        let id = this.route.params["value"].id;
        console.log('id', id);
        this.videoService.getItem(id)
                         .subscribe((data: any[])=>{
                            let d = [data];
                            for(let i=0; i<d.length; i++){
                                this.video.push(d[i]["items"][0].snippet);
                                this.iFrameUrl = 'https://www.youtube.com/embed/' + this.video[0]["resourceId"].videoId;
                                this.title = this.video[0].title;
                                this.pubDate = new Date(this.video[0].publishedAt);
                                this.videoText = this.video[0].description;
                            }
                        }, error=>{ console.log('Something went wrong...')}); 
                        return this.video;
    }

}
