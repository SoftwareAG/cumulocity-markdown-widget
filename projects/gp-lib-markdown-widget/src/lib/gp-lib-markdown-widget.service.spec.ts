import { TestBed } from '@angular/core/testing';

import { GpLibMarkdownWidgetService } from './gp-lib-markdown-widget.service';

describe('GpLibMarkdownWidgetService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GpLibMarkdownWidgetService = TestBed.get(GpLibMarkdownWidgetService);
    expect(service).toBeTruthy();
  });
});
