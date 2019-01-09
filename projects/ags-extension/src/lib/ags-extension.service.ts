import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AgsExtensionService {
  folderEdited: Subject<any>;

  constructor() { }
}
