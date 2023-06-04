import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComputingCodeComponent } from './computing-code.component';

describe('ComputingCodeComponent', () => {
  let component: ComputingCodeComponent;
  let fixture: ComponentFixture<ComputingCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComputingCodeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComputingCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
