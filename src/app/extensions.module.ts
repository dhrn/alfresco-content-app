import { NgModule } from '@angular/core';
import { AosExtensionModule } from '@alfresco/adf-office-services-ext';
import { RecordModule } from '@alfresco/adf-governance';

// Main entry point for external extensions only.
// For any application-specific code use CoreExtensionsModule instead.

@NgModule({
  imports: [AosExtensionModule, RecordModule]
})
export class AppExtensionsModule {}
