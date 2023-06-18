import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuggestmoviesComponent } from './suggestmovies.component';

describe('SuggestmoviesComponent', () => {
  let component: SuggestmoviesComponent;
  let fixture: ComponentFixture<SuggestmoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuggestmoviesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuggestmoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
