import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CopywritingComponent } from './copywriting.component';

describe('CopywritingComponent', () => {
  let component: CopywritingComponent;
  let fixture: ComponentFixture<CopywritingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CopywritingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CopywritingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
