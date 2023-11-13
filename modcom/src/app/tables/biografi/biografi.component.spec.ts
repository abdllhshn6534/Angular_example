import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiografiComponent } from './biografi.component';

describe('BiografiComponent', () => {
  let component: BiografiComponent;
  let fixture: ComponentFixture<BiografiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BiografiComponent]
    });
    fixture = TestBed.createComponent(BiografiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
