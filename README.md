# FlagExplorerWeb
OMiX coding challenge to create a flag explorer app - Web

- This (the Web) is the second of the two applications that needs to be cloned and configured locally in order to run and test the Flag Explorer App
- Make sure that you hvae the latest Noje.js (v22.14.0) and npm (11.2.0) versions inspalled on your computer before you proceed
- Clone the repository into your local machine
- Open a new wondow of Visual Studio Code (or install Visual Studio Code first if not already installed).
- Navigate to File menu, then click "Open Folder..." option. On the popup window, navigate to where the code was downloaded to and select this folder: **flagexplorerweb**
- On the Explorer pane of Visual Studio Code (on the left hand side), expand the **src** folder, then expand the **library** folder and double click the **AppConst.ts** file.
- Onec the above file is opened, make sure that the value of the **FlagExplorerAPI** property (the url) is the same as the base url of the API that is also running locally (e.g. https://localhost:44360/)
- Navigate to the Terminal menu, then click "New Terminal..." option
- Type **npm install** to install required packages that are listed in the package.json file (this may take a few minutes to complete)
- Once the packages have successfully installed, on the same terminal window, type **npm start** to launch the application

Quick View  of the App: https://flagexplorer.azurewebsites.net/ (Note: This is hosted on a free Azure App Service Plan with limited computing time. If it is accessed frequently, it might stop working with a blue screen. This means that the computing time is depleted and you might have to wait for about an hour to access it again)
