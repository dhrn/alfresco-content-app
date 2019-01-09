import { NgModule } from '@angular/core';
import { ExtensionsModule } from '@alfresco/adf-extensions';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CoreModule, TRANSLATION_PROVIDER } from '@alfresco/adf-core';
import { ContentModule } from '@alfresco/adf-content-services';
import { EffectsModule } from '@ngrx/effects';
import { UploadFileComponent, RenameFileComponent } from './dialogs';
import { ExtensionEffects } from './effects';

export function getComponents() {
  return [
    UploadFileComponent,
    RenameFileComponent
  ]
}

@NgModule({
  imports: [
    ExtensionsModule,
    FlexLayoutModule,
    CoreModule.forChild(),
    ContentModule.forChild(),
    EffectsModule.forFeature([ ExtensionEffects ])
  ],
  providers: [
    {
      provide: TRANSLATION_PROVIDER,
      multi: true,
      useValue: {
        name: 'ags-extension',
        source: 'assets/ags-extension'
      }
    }
  ],
  declarations: [
    ...getComponents()
  ],
  entryComponents: [
    ...getComponents()
  ],
  exports: [
    ...getComponents()
  ]
})
export class AgsExtensionModule {}
