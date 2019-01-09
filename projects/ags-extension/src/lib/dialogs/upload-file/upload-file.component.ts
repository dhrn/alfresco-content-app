import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { UploadFilesEvent } from '@alfresco/adf-content-services';
import { ObjectDataTableAdapter } from '@alfresco/adf-core';
import { NodeInput } from '../models';
import { Node } from 'alfresco-js-api';

@Component({
  selector: 'ags-custom-actions',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.scss']
})
export class UploadFileComponent {
  node: Node;
  currentEvent = null;
  tableData = new ObjectDataTableAdapter();
  emptyFolderImageUrl = './assets/images/empty_doc_lib.svg';

  constructor(private dialogRef: MatDialogRef<UploadFileComponent>,
              @Inject(MAT_DIALOG_DATA) public data: NodeInput) {
    this.node = data.node;
  }

  public onBeginUpload(event: UploadFilesEvent) {
      const files = event.files || [];
      if (files.length > 0) {
        event.pauseUpload();
        this.currentEvent = event;
      }
    }

  public uploadFiles() {
    if (this.currentEvent) {
      this.currentEvent.resumeUpload();
      this.dialogRef.close();
    }
  }

  public getDetails(currentEvent: UploadFilesEvent) {
    return currentEvent && currentEvent.files ? currentEvent.files.map(x => x.file) : []
  };
}
