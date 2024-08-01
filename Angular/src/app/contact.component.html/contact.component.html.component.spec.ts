import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactComponentHtmlComponent } from './contact.component.html.component';

describe('ContactComponentHtmlComponent', () => {
  let component: ContactComponentHtmlComponent;
  let fixture: ComponentFixture<ContactComponentHtmlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContactComponentHtmlComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactComponentHtmlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
