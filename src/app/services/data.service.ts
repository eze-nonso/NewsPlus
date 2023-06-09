import { Injectable } from '@angular/core';
import {BehaviorSubject, filter, finalize} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private _news = new BehaviorSubject<Response | null>(null);
  public news = this._news.asObservable();
  private _error = new BehaviorSubject<string>('');
  public error$ = this._error.asObservable();
  private _url = 'https://positiviteam-backend-hjbvlgrj5a-ey.a.run.app/News';
  private readonly _loading = new BehaviorSubject<boolean>(false);
  constructor(private http: HttpClient) { }
  public loading$ = this._loading.asObservable();
  public getNews(level?: 1 | 0.5 | -0.5 | -1 | 0): void {
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Accept', 'application/json');
    this._loading.next(true);
    this._error.next('');
    this.http.get<Response>(
      this._url,
      {headers: headers}
    )
      .pipe(filter(res => level === undefined
      ? true
      : res.score === level
      ), finalize(() => this._loading.next(false)))
      .subscribe({
        next: result => {
          this._news.next(result);
        }
      });
  }
}

interface Response  {
  title: string,
  description: string,
  link: string,
  newsSource: number,
  thumbnail: string,
  score: number,
}
