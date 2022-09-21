import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FtbgvideosectionComponent } from './ftbgvideosection.component';

describe('FtbgvideosectionComponent', () => {
  let component: FtbgvideosectionComponent;
  let fixture: ComponentFixture<FtbgvideosectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FtbgvideosectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FtbgvideosectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
