import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rps-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertWindowComponent implements OnInit {

  alerts: any[] = [];

  constructor() { }

  ngOnInit(): void { }

}
