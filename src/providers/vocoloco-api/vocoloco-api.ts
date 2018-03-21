import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable()
export class VocolocoApiProvider {
  apiBaseUrl;

  constructor(public http: HttpClient) {
    this.apiBaseUrl = 'https://www.example.com';
  }

  public getSubjectData(subject) {
    return this.request('subject', {subject: subject.id});
  }

  private request(endpoint, data) {
    let url = this.apiBaseUrl + '/' + endpoint + '/?' + this.createQueryString(data);
    console.log(url);
    return this.http.get(url);
  }

  private createQueryString = function (obj, prefix = '') {
    let str = [];
    let p;
    for (p in obj) {
      if (obj.hasOwnProperty(p)) {
        let k = prefix ? prefix + "[" + p + "]" : p,
          v = obj[p];
        str.push((v !== null && typeof v === "object") ?
          this.createQueryString(v, k) :
          encodeURIComponent(k) + "=" + encodeURIComponent(v));
      }
    }
    return str.join("&");
  }
}
