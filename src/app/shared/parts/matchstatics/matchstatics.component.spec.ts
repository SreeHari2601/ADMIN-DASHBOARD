import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchstaticsComponent } from './matchstatics.component';

describe('MatchstaticsComponent', () => {
  let component: MatchstaticsComponent;
  let fixture: ComponentFixture<MatchstaticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatchstaticsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatchstaticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
