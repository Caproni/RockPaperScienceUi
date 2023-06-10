import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoetryProseComponent } from './poetry-prose.component';

describe('PoetryProseComponent', () => {
  let component: PoetryProseComponent;
  let fixture: ComponentFixture<PoetryProseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoetryProseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PoetryProseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
