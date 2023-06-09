import { Component, HostListener, OnInit } from '@angular/core';

import { BlogReadService } from 'src/app/_services/api/blog/blog-read.service';
import { Blog } from 'src/app/_models/blog/blog';

@Component({
  selector: 'rps-app-meta',
  templateUrl: './meta.component.html',
  styleUrls: ['./meta.component.css']
})
export class MetaComponent implements OnInit {

  windowWidth!: number;
  windowHeight!: number;

  loadedBlogs = false;
  blogs: Blog[] = [];
  filteredBlogs: Blog[] = [];

  constructor(
    private blogReadService: BlogReadService,
  ) { }

  ngOnInit(): void {

    this.windowWidth = window.innerWidth;
    this.windowHeight = window.innerHeight;

    this.onInit();
  }

  onInit(): void {
    this.blogReadService.readBlog().subscribe((b) => {
      this.loadedBlogs = b;
      this.blogs = this.blogReadService.getBlog();
      this.filteredBlogs = this.blogs;
    });
  }

  @HostListener('window:resize', ['$event'])
  onResize(): void {
    this.windowWidth = window.innerWidth;
    this.windowHeight = window.innerHeight;
  }

}
