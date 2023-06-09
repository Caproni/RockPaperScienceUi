import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { ApiResponse } from 'src/app/_models/common/api-response';
import { Blog } from 'src/app/_models/blog/blog';

@Injectable({
  providedIn: 'root'
})
export class BlogReadService {

  private baseUrl = environment.apiUrl;
  private content: Blog[] = [];

  constructor(
    private http: HttpClient,
  ) {}

  getBlog(): Blog[] {
    return this.content;
  }

  readBlog(): Observable<boolean> {
    const url = `${this.baseUrl}/readBlog`;
    const subject = new BehaviorSubject<boolean>(false);
    this.http.get<ApiResponse>(url).subscribe((data) => {
      if (data.success) {
        this.content = data.content;
        subject.next(true);
      }
    });

    return subject.asObservable();
  }

}
