import { NgModule } from '@angular/core';
import { provideIcons as provideIconsImport } from '@ng-icons/core';
import { HlmIconComponent } from './hlm-icon.component';

export * from './hlm-icon.component';

export const provideIcons = provideIconsImport;

@NgModule({
  imports: [HlmIconComponent],
  exports: [HlmIconComponent],
})
export class HlmIconModule {}
