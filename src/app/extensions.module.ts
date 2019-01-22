import { NgModule } from '@angular/core';
import { ExperimentationModule, GovernanceExtensionService, RecordModule } from 'adf-governance';
import { ContentManagementService } from './services/content-management.service';

// Main entry point for external extensions only.
// For any application-specific code use CoreExtensionsModule instead.

@NgModule({
  imports: [
    RecordModule,
    ExperimentationModule
  ],
  providers: [
    {
      provide: GovernanceExtensionService,
      useExisting: ContentManagementService
    }
  ]
})
export class AppExtensionsModule {}
