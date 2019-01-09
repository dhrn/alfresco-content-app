import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, take } from 'rxjs/operators';
import { MatDialog } from '@angular/material';
import { Store } from '@ngrx/store';
import { CUSTOM_UPLOAD_FILES, CustomFileUploadDialog, RenameFileDialog, RENAME_FILE } from '../actions';
import { appSelection } from '../selectors';
import { RenameFileComponent, UploadFileComponent } from '../dialogs';
import { AgsExtensionService } from '../ags-extension.service';

@Injectable()
export class ExtensionEffects {

  constructor(
    private store: Store<any>,
    private actions$: Actions,
    private dialog: MatDialog,
    private agsExtensionService: AgsExtensionService
  ) { }

  @Effect({ dispatch: false })
  FileUploadDialog$ = this.actions$.pipe(
    ofType<CustomFileUploadDialog>(CUSTOM_UPLOAD_FILES),
    map(() => {
        this.store
          .select(appSelection)
          .pipe(take(1))
          .subscribe(selection => {
            if (selection && !selection.isEmpty) {
              //Todo: check for upload permission
              this.dialog.open(UploadFileComponent, {
                data: { node: selection.first.entry },
                minWidth: '550px',
              })
            }
          });
    })
  );

  @Effect({ dispatch: false })
  RenameFileDialog$ = this.actions$.pipe(
    ofType<RenameFileDialog>(RENAME_FILE),
    map(() => {
      this.store
        .select(appSelection)
        .pipe(take(1))
        .subscribe(selection => {
          if (selection && !selection.isEmpty) {
            const dialog = this.dialog.open(RenameFileComponent, {
              data: { node: selection.first.entry },
              minWidth: '550px',
            });

            dialog.afterClosed().subscribe(() => {
              this.agsExtensionService.folderEdited.next();
            })
          }
        });
    })
  );

}
