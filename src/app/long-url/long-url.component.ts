import { Component, OnInit } from '@angular/core';
import {UrlsService } from '../urls.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-long-url',
  templateUrl: './long-url.component.html',
  styleUrls: ['./long-url.component.css']
})
export class LongUrlComponent implements OnInit {

  constructor(private route: ActivatedRoute, private urlsService: UrlsService,) { }

  ngOnInit() {
    let short_code = this.route.snapshot.paramMap.get("code");
    this.onRedirect(short_code);
  }

  onRedirect(short_code: string) {
    this.urlsService.getLongUrlByCode(short_code)
      .subscribe((data: any) => {
        if(data.code == 200) {
          location.href = data.long_url;
        } else {
          alert(data.error);
        }
      });
  }
}
