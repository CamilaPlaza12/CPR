import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtentionComponent } from './atention.component';

describe('AtentionComponent', () => {
  let component: AtentionComponent;
  let fixture: ComponentFixture<AtentionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AtentionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AtentionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
