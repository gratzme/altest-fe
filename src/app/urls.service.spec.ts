import { TestBed } from '@angular/core/testing';
import { UrlsService } from './urls.service';
import { HttpClientModule } from '@angular/common/http';

describe('UrlsService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [ HttpClientModule ]
  }));

  it('should be created', () => {
    const service: UrlsService = TestBed.get(UrlsService);
    expect(service).toBeTruthy();
  });

  it('should return json array url list', async () => {
    const service: UrlsService = TestBed.get(UrlsService);
    const urlObjs: any = await service.getUrlList().toPromise().then(data => {
      return data;
    });
    expect(urlObjs.length).toBeGreaterThanOrEqual(1);
  });

  it('should be a valid url', async () => {
    const service: UrlsService = TestBed.get(UrlsService);
    const url = 'https://www.google.com';
    const dataObj: any = await service.urlShortener(url).toPromise().then(data => {
      return data;
    });
    expect(dataObj.code).toEqual(200);
  });

  it('should return error URL does not appear to exist.', async () => {
    const service: UrlsService = TestBed.get(UrlsService);
    const url = 'https://www.googggggl.com/';
    const dataObj: any = await service.urlShortener(url).toPromise().then(data => {
      return data;
    });
    expect(dataObj.error).toEqual("URL does not appear to exist.");
  });

  it('should return error Invalid URL.', async () => {
    const service: UrlsService = TestBed.get(UrlsService);
    const url = 'lorem-ipsum';
    const dataObj: any = await service.urlShortener(url).toPromise().then(data => {
      return data;
    });
    expect(dataObj.error).toEqual("Invalid URL.");
  });

  it('should return error No URL supplied.', async () => {
    const service: UrlsService = TestBed.get(UrlsService);
    const url = '';
    const dataObj: any = await service.urlShortener(url).toPromise().then(data => {
      return data;
    });
    expect(dataObj.error).toEqual("No URL supplied.");
  });

  it('should be a valid short code', async () => {
    const service: UrlsService = TestBed.get(UrlsService);
    const shortCode = 'f3872b';
    const dataObj: any = await service.getLongUrlByCode(shortCode).toPromise().then(data => {
      return data;
    });
    expect(dataObj.code).toEqual(200);
  });

  it('should return error No short code supplied.', async () => {
    const service: UrlsService = TestBed.get(UrlsService);
    const shortCode = '';
    const dataObj: any = await service.getLongUrlByCode(shortCode).toPromise().then(data => {
      return data;
    });
    expect(dataObj.error).toEqual("No short code supplied.");
  });

  it('should return error Short code does not exist.', async () => {
    const service: UrlsService = TestBed.get(UrlsService);
    const shortCode = 'loremipsum';
    const dataObj: any = await service.getLongUrlByCode(shortCode).toPromise().then(data => {
      return data;
    });
    expect(dataObj.error).toEqual("Short code does not exist.");
  });
});
