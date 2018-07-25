import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FetchvideosService {

    private videoAPIEndpoint: string = "https://www.googleapis.com/youtube/v3/playlistItems?part=snippet,contentDetails,status&maxResults=9&playlistId=PLSi28iDfECJPJYFA4wjlF5KUucFvc0qbQ&key=AIzaSyCuv_16onZRx3qHDStC-FUp__A6si-fStw&pageToken=";
    
    private singleVideoAPIEndpoint: string = "https://www.googleapis.com/youtube/v3/playlistItems?part=snippet,contentDetails,status&key=AIzaSyCuv_16onZRx3qHDStC-FUp__A6si-fStw&id=";
    
    constructor(private http: HttpClient) { }

    getList(params){
        return this.http.get(this.videoAPIEndpoint+params);
    }

    getItem(params){
        return this.http.get(this.singleVideoAPIEndpoint+params);
    } 
}
