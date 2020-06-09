import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GpLibMarkdownWidgetComponent } from './gp-lib-markdown-widget.component';

describe('GpLibMarkdownWidgetComponent', () => {
  let component: GpLibMarkdownWidgetComponent;
  let fixture: ComponentFixture<GpLibMarkdownWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GpLibMarkdownWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GpLibMarkdownWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
