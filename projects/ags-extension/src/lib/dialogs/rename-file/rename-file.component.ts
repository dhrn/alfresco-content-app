import { Observable } from 'rxjs';

import { Component, Inject, OnInit, Optional } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

import { NodeInput } from '../models';
import { Node } from 'alfresco-js-api';
import { NodesApiService, NotificationService } from '@alfresco/adf-core';


@Component({
  selector: 'ags-rename-file',
  templateUrl: './rename-file.component.html',
  styleUrls: ['./rename-file.component.scss']
})
export class RenameFileComponent implements OnInit {

  form: FormGroup;

  editTitle = 'EDIT-FILE.NAME';

  constructor(
    private formBuilder: FormBuilder,
    private dialog: MatDialogRef<RenameFileComponent>,
    private nodesApi: NodesApiService,
    private notificationService: NotificationService,
    @Optional()
    @Inject(MAT_DIALOG_DATA)
    public data: NodeInput
  ) {
  }

  ngOnInit() {
    //Todo: filename is having name with type
    const { node: { name } } = this.data;
    const validators = {
      name: [
        Validators.required
      ]
    };

    this.form = this.formBuilder.group({
      name: [ name, validators.name ]
    });
  }

  get name(): string {
    const { name } = this.form.value;

    return (name || '').trim();
  }

  get properties(): any {
    const { name: title } = this;

    return {
      'cm:title': title,
    };
  }

  get description(): string {
    const { description } = this.form.value;

    return (description || '').trim();
  }


  private edit(): Observable<Node> {
    const { name, nodesApi, data: { node: { id: nodeId }} } = this;
    return nodesApi.updateNode(nodeId, { name: name });
  }

  submit() {
    const { form, dialog } = this;

    if (!form.valid) { return; }

    this.edit().subscribe(
        (folder: Node) => {
          dialog.close(folder);
        },
        (error) => this.handleError(error)
      );
  }

  handleError(error: any): any {

    try {
      const { error: {} } = JSON.parse(error.message);

      this.notificationService.openSnackMessage(
        `Something went wrong`,
        3000
      );
    } catch (err) { /* Do nothing, keep the original message */ }


    return error;
  }
}
