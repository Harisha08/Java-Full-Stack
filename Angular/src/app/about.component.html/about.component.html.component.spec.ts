import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutComponentHtmlComponent } from './about.component.html.component';

describe('AboutComponentHtmlComponent', () => {
  let component: AboutComponentHtmlComponent;
  let fixture: ComponentFixture<AboutComponentHtmlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AboutComponentHtmlComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutComponentHtmlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
