import { Component, OnInit, Input, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'lib-gp-lib-markdown-widget',
  templateUrl: './gp-lib-markdown-widget.component.html',
  styleUrls: ['./gp-lib-markdown-widget.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class GpLibMarkdownWidgetComponent implements OnInit {
  @Input() config;
  constructor() { }

  ngOnInit() {
  }

}
