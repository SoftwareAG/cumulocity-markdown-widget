import { TestBed } from '@angular/core/testing';

import { GpMarkdownWidgetService } from './gp-markdown-widget.service';

describe('GpMarkdownWidgetService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GpMarkdownWidgetService = TestBed.get(GpMarkdownWidgetService);
    expect(service).toBeTruthy();
  });
});
