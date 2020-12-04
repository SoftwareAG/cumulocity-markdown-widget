import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GpMarkdownWidgetComponent } from './gp-markdown-widget.component';

describe('GpMarkdownWidgetComponent', () => {
  let component: GpMarkdownWidgetComponent;
  let fixture: ComponentFixture<GpMarkdownWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GpMarkdownWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GpMarkdownWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
