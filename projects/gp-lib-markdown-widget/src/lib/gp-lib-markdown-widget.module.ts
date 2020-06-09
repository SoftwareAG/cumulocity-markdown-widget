import { NgModule } from '@angular/core';
import { HOOK_COMPONENTS, CoreModule } from '@c8y/ngx-components';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MarkdownModule } from 'ngx-markdown';
import { GpLibMarkdownWidgetComponent } from './gp-lib-markdown-widget.component';
import { GpMarkdownConfigComponent } from './gp-lib-markdown-widget.config';

@NgModule({
  declarations: [GpLibMarkdownWidgetComponent, GpMarkdownConfigComponent],
  imports: [
    BrowserModule,
    FormsModule,
    CoreModule,
    MarkdownModule.forRoot(),
  ],
  exports: [GpLibMarkdownWidgetComponent, GpMarkdownConfigComponent],
  entryComponents: [GpLibMarkdownWidgetComponent, GpMarkdownConfigComponent],
  providers: [
    GpLibMarkdownWidgetComponent,
    {
    provide: HOOK_COMPONENTS,
    multi: true,
    useValue: {
        id: 'markdown.widget',
        label: 'Markdown Widget',
        description: 'Display Markdown Documentation',
        component: GpLibMarkdownWidgetComponent,
        configComponent: GpMarkdownConfigComponent,
        data: {
            ng1: {
                options: {
                noDeviceTarget: true,
                noNewWidgets: false,
                deviceTargetNotRequired: true,
                groupsSelectable: false
                }
            }
        }
    }
  }]
})
export class GpLibMarkdownWidgetModule { }
