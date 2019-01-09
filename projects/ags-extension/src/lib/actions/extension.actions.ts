import { Action } from '@ngrx/store';
import { MinimalNodeEntity } from 'alfresco-js-api';

export const CUSTOM_UPLOAD_FILES = 'CUSTOM_UPLOAD_FILES';

export class CustomFileUploadDialog implements Action {
  readonly type = CUSTOM_UPLOAD_FILES;
  constructor(public payload?: MinimalNodeEntity) {}
}

export const RENAME_FILE = 'RENAME_FILE';

export class RenameFileDialog implements Action {
  readonly type = RENAME_FILE;
  constructor(public payload: MinimalNodeEntity) {}
}
