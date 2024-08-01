import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponentHtmlComponent } from './home.component.html.component';

describe('HomeComponentHtmlComponent', () => {
  let component: HomeComponentHtmlComponent;
  let fixture: ComponentFixture<HomeComponentHtmlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeComponentHtmlComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeComponentHtmlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
