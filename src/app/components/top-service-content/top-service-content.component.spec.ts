import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopServiceContentComponent } from './top-service-content.component';

describe('TopServiceContentComponent', () => {
  let component: TopServiceContentComponent;
  let fixture: ComponentFixture<TopServiceContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopServiceContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopServiceContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
