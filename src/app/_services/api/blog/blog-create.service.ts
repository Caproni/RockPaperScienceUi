import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Blog } from 'src/app/_models/blog/blog';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BlogCreateService {

  private baseUrl = environment.apiUrl;

  constructor(
    private http: HttpClient,
  ) { }

  createBlog(medium: Blog) {
    const url = `${this.baseUrl}/createBlog`;
    return this.http.post(url, medium);
  }

}
