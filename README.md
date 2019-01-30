   <p align="left"> <img title="Alfresco" src="alfresco.png" alt="Alfresco - make business flow"></p>
   
# Alfresco Governance Application

This is the home for the Governance team's components built for content appication.

## Introduction

The Alfresco Governance Application is an extension app for [ACA](https://github.com/Alfresco/alfresco-content-app) to achieve the *Governance Functionalites* by providing plugins and built using
[Alfresco Application Development Framework (ADF)](https://github.com/Alfresco/alfresco-ng2-components) components and was generated with [Angular CLI](https://github.com/angular/angular-cli).. 

### Who is this application for

The Governance Application is a streamlined experience for end users on top of Alfresco Content Services, focused on record management within the content repository.

### Where to get help
There are a number of resources available to help get you started with the Content App and the ADF:
* [Content App Documentation](https://alfresco.github.io/alfresco-content-app/)
* [Alfresco ADF Documentation](https://alfresco.github.io/adf-component-catalog/)
* [Alfresco Community](https://community.alfresco.com/)

To get help on Angular CLI use ng help or read the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


### Supported plugins

| Feature          | Description                                                  | Name         |
|------------------|--------------------------------------------------------|--------------|
| Declare a content as record | It allows user the user to declare record and enables record options once it is declared |  declare-record-plugin |
| Record Rejection | Allows to user to remove the rejected warning and view the info  |   record-name.plugin |
| Delete a Record  | Proview the context menu to delete the record                    |   record-deletion |

### How to use

Step 1:
  Add the reference of your require plugin's name in the app.extensions.json as below
```
  "$references": [
    "declare-record-plugin.json",
    "record-name.plugin"
  ]   

```
Step 2:
  Add the follwing code in your angular.json

```
  {
    "glob": "**/*",
    "input": "node_modules/adf-governance/assets/i18n",
    "output": "/assets/adf-governance/i18n"
  },
  {
    "glob": "*.json",
    "input": "node_modules/adf-governance/assets",
    "output": "/assets/plugins/"
  },

```

Step 3:
  Add the following code in *AppExtensionsModule*

```
import { NgModule } from '@angular/core';
import {
  NodeExtensionService,
  RecordModule
} from 'adf-governance';
import { ContentManagementService } from './services/content-management.service';

// Main entry point for external extensions only.
// For any application-specific code use CoreExtensionsModule instead.

@NgModule({
  imports: [ RecordModule ],
  providers: [
    {
      provide: NodeExtensionService,
      useExisting: ContentManagementService
    }
  ]
})
export class AppExtensionsModule {}

```


### Raising issues and feature requests
Isses can be raised in GitHub or in the Alfresco JIRA project. 
Please include a clear description, steps to reproduce and screenshots where appropriate.All issues will be reviewed; bugs will be categorized if reproducible and enhancement/feature suggestions will be considered against existing priorities if the use case serves a general-purpose need.


### Want to help?
Want to file a bug, contribute some code, or improve documentation? Excellent! Read up on our guidelines for contributing and then check out one of our issues in the [Jira](https://issues.alfresco.com/jira/projects/ACA) or [GitLab](https://gitlab.alfresco.com/adf-governance/adf-governance-app/issues)


## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

[gitlab]: https://gitlab.alfresco.com/adf-governance/adf-governance-app/issues
[jira]: https://issues.alfresco.com/jira/projects/AGA
