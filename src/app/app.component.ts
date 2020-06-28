import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  apiStatus: string;
  data: any[] = [];

  constructor(private _http: HttpClient) {}

  ngOnInit() {
    // test http call
    /*
    this._http.get('/api/status').subscribe(data => {
      if (data) {
        // for (const d of (data as any)) {
        //   this.data.push({
        //     name: d.data.json()
        //   });
        // }
        console.warn(data);
      } else {
        console.error('no data loaded');
      }
    });
     */
  }


}
