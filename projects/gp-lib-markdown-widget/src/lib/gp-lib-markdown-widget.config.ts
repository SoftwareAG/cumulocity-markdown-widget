import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lib-gp-markdown-config',
  templateUrl: './gp-lib-markdown-widget.config.html',
  styleUrls: ['./gp-lib-markdown-widget.config.css']
})

export class GpMarkdownConfigComponent implements OnInit {

@Input() config: any = {};

  constructor() {}

  ngOnInit() {
  }

}
