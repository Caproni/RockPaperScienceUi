import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-rps-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @ViewChild('navbarCollapse') navbarCollapse!: ElementRef;

  constructor() { }

  ngOnInit(): void { }

  closeNavbar(): void {
    const navbarToggle = document.querySelector('.navbar-toggler');
    if (navbarToggle && this.navbarCollapse.nativeElement.classList.contains('show')) {
      navbarToggle.dispatchEvent(new Event('click'));
    }
  }

}
