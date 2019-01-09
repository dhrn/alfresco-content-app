import { NgModule } from '@angular/core';
import { AgsExtensionModule, AgsExtensionService } from 'ags-extension';
import { ContentManagementService } from './services/content-management.service';

// Main entry point for external extensions only.
// For any application-specific code use CoreExtensionsModule instead.

@NgModule({
  imports: [
    AgsExtensionModule
  ],
  providers: [
    {
      provide: AgsExtensionService,
      useExisting: ContentManagementService
    }
  ]
})
export class AppExtensionsModule {}
