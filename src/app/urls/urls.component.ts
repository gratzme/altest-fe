import { Component, OnInit } from '@angular/core';
import {UrlsService } from '../urls.service';
import { PlatformLocation } from '@angular/common';

@Component({
  selector: 'app-urls',
  templateUrl: './urls.component.html',
  styleUrls: ['./urls.component.css']
})

export class UrlsComponent implements OnInit {

  urls: any[] = [];
  urlPrefix: string = "";
  urlInputValue: string = "";

  constructor(
    private urlsService: UrlsService,
    platformLocation: PlatformLocation
  ) {
    this.urlPrefix = (platformLocation as any).location.origin + '/q/';
  }

  ngOnInit() {
    this.getUrlList();
  }

  getUrlList() {
    this.urlsService.getUrlList()
      .subscribe((data: any) => {
        this.urls = data;
      });
  }

  onShorten(urlInput: string) {
    if(urlInput) {
      this.urlsService.urlShortener(urlInput)
        .subscribe((data: any) => {
          if(data.code == 200) {
            if(!data.found) {
              this.urls.push({long_url: urlInput, short_code: data.short_code});
            } else {
              alert('Already in the list.');
            }
          } else {
            alert(data.error);
          }
          this.urlInputValue = null;
        });
    } else {
      alert('No URL supplied.');
    }
  }
}
