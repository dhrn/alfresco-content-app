import { NgModule } from '@angular/core';
import { AdfGovernanceModule } from 'adf-governance';

// Main entry point for external extensions only.
// For any application-specific code use CoreExtensionsModule instead.

@NgModule({
  imports: [
    AdfGovernanceModule
  ]
})
export class AppExtensionsModule {}
