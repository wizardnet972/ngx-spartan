import { NgModule } from '@angular/core';
import { HlmSelectContentDirective } from './lib/hlm-select-content.directive';
import { HlmSelectGroupDirective } from './lib/hlm-select-group.directive';
import { HlmSelectLabelDirective } from './lib/hlm-select-label.directive';
import { HlmSelectOptionComponent } from './lib/hlm-select-option.component';
import { HlmSelectScrollDownComponent } from './lib/hlm-select-scroll-down.component';
import { HlmSelectScrollUpComponent } from './lib/hlm-select-scroll-up.component';
import { HlmSelectTriggerComponent } from './lib/hlm-select-trigger.component';
import { HlmSelectValueDirective } from './lib/hlm-select-value.directive';
import { HlmSelectDirective } from './lib/hlm-select.directive';

export * from './lib/hlm-select-content.directive';
export * from './lib/hlm-select-group.directive';
export * from './lib/hlm-select-label.directive';
export * from './lib/hlm-select-option.component';
export * from './lib/hlm-select-scroll-down.component';
export * from './lib/hlm-select-scroll-up.component';
export * from './lib/hlm-select-trigger.component';
export * from './lib/hlm-select-value.directive';
export * from './lib/hlm-select.directive';

export const HlmSelectImports = [
  HlmSelectContentDirective,
  HlmSelectTriggerComponent,
  HlmSelectOptionComponent,
  HlmSelectValueDirective,
  HlmSelectDirective,
  HlmSelectScrollUpComponent,
  HlmSelectScrollDownComponent,
  HlmSelectLabelDirective,
  HlmSelectGroupDirective,
] as const;

@NgModule({
  imports: [...HlmSelectImports],
  exports: [...HlmSelectImports],
})
export class HlmSelectModule {}

import { BrnSelectContentComponent } from './brain/lib/brn-select-content.component';
import { BrnSelectGroupDirective } from './brain/lib/brn-select-group.directive';
import { BrnSelectLabelDirective } from './brain/lib/brn-select-label.directive';
import { BrnSelectOptionDirective } from './brain/lib/brn-select-option.directive';
import { BrnSelectScrollDownDirective } from './brain/lib/brn-select-scroll-down.directive';
import { BrnSelectScrollUpDirective } from './brain/lib/brn-select-scroll-up.directive';
import { BrnSelectTriggerDirective } from './brain/lib/brn-select-trigger.directive';
import { BrnSelectValueComponent } from './brain/lib/brn-select-value.component';
import { BrnSelectComponent } from './brain/lib/brn-select.component';

export * from './brain/lib/brn-select-content.component';
export * from './brain/lib/brn-select-group.directive';
export * from './brain/lib/brn-select-label.directive';
export * from './brain/lib/brn-select-option.directive';
export * from './brain/lib/brn-select-scroll-down.directive';
export * from './brain/lib/brn-select-scroll-up.directive';
export * from './brain/lib/brn-select-trigger.directive';
export * from './brain/lib/brn-select-value.component';
export * from './brain/lib/brn-select.component';
export * from './brain/lib/brn-select.service';

export const BrnSelectImports = [
  BrnSelectComponent,
  BrnSelectContentComponent,
  BrnSelectTriggerDirective,
  BrnSelectOptionDirective,
  BrnSelectValueComponent,
  BrnSelectScrollDownDirective,
  BrnSelectScrollUpDirective,
  BrnSelectGroupDirective,
  BrnSelectLabelDirective,
] as const;

@NgModule({
  imports: [...BrnSelectImports],
  exports: [...BrnSelectImports],
})
export class BrnSelectModule {}
