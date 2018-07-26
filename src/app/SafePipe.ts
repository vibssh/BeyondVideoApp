/**
 * @author Vaibhav Shringarpure
 * @email vibs.sh@gmail.com
 * @create date 2018-07-26 03.11.10
 * @modify date 2018-07-26 03:11:10
 * @desc [Custom Pipe for Sanitizing URL ]
*/
import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
@Pipe({ name: 'safe' })
export class SafePipe implements PipeTransform {
    constructor(private sanitizer: DomSanitizer) { }
    transform(url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }
}