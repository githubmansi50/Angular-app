import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SucidecryptComponent } from './sucidecrypt.component';

describe('SucidecryptComponent', () => {
  let component: SucidecryptComponent;
  let fixture: ComponentFixture<SucidecryptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SucidecryptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SucidecryptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
