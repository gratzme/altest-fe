import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const API_URL = 'https://infinite-woodland-03590.herokuapp.com/api';

@Injectable({
  providedIn: 'root'
})
export class UrlsService {

  constructor(private http: HttpClient) { }

  listUrl = API_URL + '/list';
  getUrl = API_URL + '/expand';
  shortenUrl = API_URL + '/shorten';

  getUrlList() {
    return this.http.get(this.listUrl);
  }

  getLongUrlByCode(shortCode: string)
  {
    let data = JSON.stringify({
      code: shortCode
    });
    return this.http.post(this.getUrl, data);
  }

  urlShortener(url: string)
  {
    let data = JSON.stringify({
      url: url
    });
    return this.http.post(this.shortenUrl, data);
  }
}
