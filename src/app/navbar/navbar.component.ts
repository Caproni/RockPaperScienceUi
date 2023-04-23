import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hmr-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  photosPath = '/photos';

  constructor() { }

  ngOnInit(): void { }

}
