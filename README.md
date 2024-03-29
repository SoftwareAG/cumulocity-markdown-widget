# Cumulocity Widget - Markdown Widget[<img width="35" src="https://user-images.githubusercontent.com/67993842/97668428-f360cc80-1aa7-11eb-8801-da578bda4334.png"/>](https://github.com/SoftwareAG/cumulocity-markdown-widget/releases/download/2.0.0/gp-markdown-widget-1.1.0.zip)


##  Overview 
This is an Angular 8 library widget that parses the mardown text to html. 
To deliver the expected functionality one need to add the markdown text in the configuration.

## USeCase
![markdown-usecase](https://user-images.githubusercontent.com/70568133/101155512-413f9600-364d-11eb-8d6f-df11cb2c73e2.PNG)

## Runtime Widget Installation (Without Application Deployment)

* This widget support runtime deployment. Download [Runtime Binary](https://github.com/SoftwareAG/cumulocity-markdown-widget/releases/download/2.0.0/gp-markdown-widget-1.1.0.zip) and use application builder to install your runtime widget.

## Installation of widget through Appbuilder or Cockipt Deployment
  
**Supported Cumulocity Environments:**
  
*  **App Builder:** Tested with Cumulocity App Builder version 1.2.1.
  
*  **Cockpit Application:** Tested with Cockpit 1006.3.0 with [Patch Fix](https://www.npmjs.com/package/cumulocity-runtime-widget-loader).

**Prerequisites:**
  
* Git
  
* NodeJS (release builds are currently built with `v10.19.0`)
  
* NPM (Included with NodeJS)
  
**External dependencies:**

```
"ngx-markdown": "^8.2.1";

"@angular/cdk": "8.2.3",

"ngx-bootstrap": "5.5.0",

"core-js": "^2.6.2",

"@c8y/ngx-components": "^1006.3.0",

"@c8y/ng1-modules": "^1006.3.0",

"@c8y/style": "^1006.3.0",

```

**Installation Steps For App Builder:**

**Note:** If you are new to App Builder or not yet downloaded/clone app builder code then please follow [App builder documentation(Build Instructions)](https://github.com/SoftwareAG/cumulocity-app-builder) before proceeding further.

1. Open Your existing App Builder project and install external dependencies by executing below command or install it manually.
  - Angular ngx-markdown version 8.2.1

    Installation command:  ```npm i ngx-markdown@8.2.1 ``` 


2. Grab the Markdown Widget **[Latest Release Binary](https://github.com/SoftwareAG/cumulocity-markdown-widget/releases/download/2.0.0/gp-markdown-widget-2.0.0.tgz)**

3. Install the Binary file in app builder.

```
npm i <binary  file  path>/gp-markdown-widget-1.0.0.tgz
```

4. Open index.less located at /cumulocity-app-builder/ui-assets/

5. Update index.less file with below theme. Import at first line in file/begining of file(Please ignore this step if it already exist).

```
@import '~@c8y/style/main.less';
@import '~@c8y/style/extend.less';
```
6. Import GpMarkdownWidgetModule in app.module.ts and also place the imported Module under `@NgModule`.

```

import {GpMarkdownWidgetModule} from 'gp-markdown-widget';

@NgModule({

  imports: [

    GpMarkdownWidgetModule    

      ]

  })

```

7.  Congratulation! Installation is now completed. Now you can run app builder locally or build and deploy it into your tenant.
  
```
//Start App Builder
npm run start
// Build App
npm run build
// Deploy App
npm run deploy
```

**Installation Steps For Cockpit:**

**Note:** If you are new to Cockpit or not yet created any cockpit application then please follow [Web SDK for Angular](https://cumulocity.com/guides/web/angular/) before proceeding further.

1. Open Your existing Cockpit/Cumulocity project and install external dependencies by executing below command or install it manually.

   - Angular ngx-markdown version 8.2.1

    Installation command:  ```npm i ngx-markdown@8.2.1 ``` 


2. Grab the Markdown Widget **[Latest Release Binary](https://github.com/SoftwareAG/cumulocity-markdown-widget/releases/download/2.0.0/gp-markdown-widget-2.0.0.tgz)**

3. Install the Binary file in app builder.

```
npm i <binary  file  path>/gp-markdown-widget-1.0.0.tgz
```

**Note:** If you don't find branding folder then please follow [Cumulocity Branding](https://cumulocity.com/guides/web/angular/#branding)

4. Open branding.less located at /cumulocity-app/branding/

5. In `branding.less ` import following design templates. Import at first line/begining of file(Please ignore this step if it already exist).

  ```
  @import '~@c8y/style/main.less';

  @import '~@c8y/style/extend.less';
  ```
6. Import GpMarkdownWidgetModule in app.module.ts and also place the imported Module under `@NgModule`.

  ```

import {GpMarkdownWidgetModule} from 'gp-markdown-widget';

  @NgModule({

    imports: [

      GpMarkdownWidgetModule    

        ]

    })

  ```

7.  Congratulation! Installation is now completed. Now you can run your app locally or build and deploy it into your tenant.
  
```
//Start App Builder
npm run start
// Build App
npm run build
// Deploy App
npm run deploy  
```

## Build Instructions
  
**Note:** It is only necessary to follow these instructions if you are modifying/extending this widget, otherwise see the [Installation Guide](#Installation).
  
**Prerequisites:**
  
* Git
  
* NodeJS (release builds are currently built with `v10.19.0`)
  
* NPM (Included with NodeJS)

**Instructions**

1. Clone the repository:
```
git clone https://github.com/SoftwareAG/cumulocity-markdown-widget.git
```
2. Change directory:

  ```cd gp-markdown-widget```

3. run npm i command to install all library files specified in source code

  ```npm i ``` 

4. run npm run buildMinor command to create a binary file under dist folder

  ```npm run buildMinor ``` 

5. (Optional) Local development server:
  
  ```npm start```

6. Build the app:

  ```npm run build```

7. Deploy the app:
  ```npm run deploy```

## QuickStart
This guide will teach you how to add widget in your existing or new dashboard.

1. Open the Application Builder from the app switcher (Next to your username in the top right)

2. Click Add application

3. Enter the application details and click Save

4. Select Add dashboard

5. Click Blank Dashboard

6. Enter the dashboard details and click Save

7. Select the dashboard from the navigation

8. Check for your widget and test it out.


Congratulations! Markdown Widget is configured.

## User Guide

- Enter the Markdown text in the the text area of the configuration.

![markdown-config](https://user-images.githubusercontent.com/70568133/101155503-400e6900-364d-11eb-858f-c76d484a7247.PNG)
## Troubleshooting

------------------------------
  
  
This widget is provided as-is and without warranty or support. They do not constitute part of the Software AG product suite. Users are free to use, fork and modify them, subject to the license agreement. While Software AG welcomes contributions, we cannot guarantee to include every contribution in the master project.
  
_____________________
  
For more information you can Ask a Question in the [TECHcommunity Forums](https://tech.forums.softwareag.com/tags/c/forum/1/Cumulocity-IoT).
  
  
You can find additional information in the [Software AG TECHcommunity](https://tech.forums.softwareag.com/tag/Cumulocity-IoT).
