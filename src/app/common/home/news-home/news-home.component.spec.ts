import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsHomeComponent } from './news-home.component';

describe('NewsHomeComponent', () => {
  let component: NewsHomeComponent;
  let fixture: ComponentFixture<NewsHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewsHomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
