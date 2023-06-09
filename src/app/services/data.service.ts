import { Injectable } from '@angular/core';
import {BehaviorSubject, delay, filter, finalize, map} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private _news = new BehaviorSubject<Response[]>([]);
  public news = this._news.asObservable();
  private _error = new BehaviorSubject<string>('');
  public error$ = this._error.asObservable();
  private _url = 'https://positiviteam-backend-hjbvlgrj5a-ey.a.run.app/News';
  private readonly _loading = new BehaviorSubject<boolean>(false);
  constructor(private http: HttpClient) { }
  public loading$ = this._loading.asObservable();
  public getNews(level?: Steps): void {
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Accept', 'application/json');
    this._loading.next(true);
    this._error.next('');
    this.http.get<Response[]>(
      this._url,
      {headers: headers}
    )
      .pipe(map(res => level === undefined
      ? res
      : res.filter(item => item.score >= level),
      ), map(res => res.filter(item => !!item.description)),
        delay(500),
        finalize(() => this._loading.next(false)))
      .subscribe({
        next: result => {
          this._news.next(result);
        }, error: (error: Error) => {
          this._error.next(error.message);
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

export type Steps = 1 | 0.5 | -0.5 | -1 | 0;
