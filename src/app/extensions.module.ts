import { NgModule } from '@angular/core';
import { AdfGovernanceModule, GovernanceExtensionService } from 'adf-governance';
import { ContentManagementService } from './services/content-management.service';

// Main entry point for external extensions only.
// For any application-specific code use CoreExtensionsModule instead.

@NgModule({
  imports: [
    AdfGovernanceModule
  ],
  providers: [
    {
      provide: GovernanceExtensionService,
      useExisting: ContentManagementService
    }
  ]
})
export class AppExtensionsModule {}
