import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextLeftSideComponent } from './text-left-side.component';

describe('TextLeftSideComponent', () => {
  let component: TextLeftSideComponent;
  let fixture: ComponentFixture<TextLeftSideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextLeftSideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextLeftSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
