# Plumier SQL React - Basic Starter
This starter project contains basic monorepo setup using yarn workspace. 

## Prerequisite
* NodeJS 10+
* Yarn (required, because we used Yarn workspace)
* VSCode (recommended)

## Installation
* Download this repo extract to any directory you like
* Open VSCode then open the directory
* Open VSCode integrated terminal
* `$ yarn install` to install dependencies
* `$ yarn start` to start the project

# File Structure 
Project consist of 2 packages: UI and Server. UI is a minimum react project created using [create-react-app](https://facebook.github.io/create-react-app/), it reside inside `packages/ui` directory. Server is Plumier project that run using [ts-node-dev](https://www.npmjs.com/package/ts-node-dev) for development purposes, it reside inside `packages/server` directory.

> If you want to rename the project directory name other than 'ui' and 'server' you should change the appropriate 
> project scripts inside `scripts` directory.

# Command
The root package.json contains predefined scripts for convenient. Some command uses typescript code that stays on `scripts` directory and executed using `ts-node` 

## Start
This command used start both UI and Server. Server will be ran in debug mode `--inspect` and debugger will listen to port 9229. Refer to [Debugging](#debugging) for more info about debugging the project

To run the command simply 

`$ yarn start` 


## Clean
This command used to clean the project, it will clean the build directory and all generated JS file if any. The logic stays on `scripts/cleanup.ts` 

To run the command simply 

`$ yarn clean` 

## Kill 
This command used to kill the port used by UI and Server. This command useful when the port is locked by previous ran that was not closed. 

To run the command simply 

`$ yarn kill` 

## Build
This command used to make a deployment build. The code will be build on the root folder named `build`.  Refer to [Deployment](#deployment) for more information

To run the command simply 

`$ yarn build` 

# Debugging
It is recommended to use VSCode to debug the project, You can use other editor/IDE, but this project provided VSCode `lunch.json` for convenion.

Keep in mind debugging Server and UI can't be done in the same time, it uses different lunch configuration so 
it can't debugged at the same time.

### Debugging UI
Debugging UI require **Debugger for Chrome** extension. Go to VSCode extension and install. To start debugging ui simply:
* `yarn start` if you not started the project yet.
* Place break point on any `tsx` files you like
* Go to VSCode Debug workbench on the debug dropdown select **Debug UI**

### Debugging Server
Debugging Server doesn't require you to install any extension. To start debugging simply:
* `$ yarn start` if you not started the project yet
* Place break point on any `ts` files you like
* Go to VSCode Debug workbench on the debug dropdown select **Debug Server**

