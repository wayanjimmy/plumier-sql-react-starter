# Plumier SQL React - Basic Starter
This starter project contains basic monorepo setup using yarn workspace. 

### Prerequisite
* NodeJS 10+
* Yarn (required, because we used Yarn workspace)
* VSCode (recommended)

### Installation
* [Download](https://codeload.github.com/ktutnik/plumier-sql-react-starter/zip/master) this repo extract to any directory you like
* Open VSCode then open the directory
* Open VSCode integrated terminal
* `$ yarn install` 
* `$ yarn start` 

# File Structure 
Project consist of 3 projects: Core, UI and Server. Each project files placed inside `packages` directory.
> If you want to rename the project directory name other than 'ui' and 'server' you should change the appropriate 
> project scripts inside `scripts` directory.

### Core 
The Core project (`packages/core`) contains shareable objects/function that can be used on Server and UI. This project should only dependent to pure JavaScript package (non server/ui related package)

### UI
The UI project (`packages/ui`) is a minimal TypeScript react app created using  [create-react-app](https://facebook.github.io/create-react-app/), It will host its own web server `http://localhost:3000`. A proxy to the server side already configured in the `package.json` file.

### Server
The server project (`packages/server`) is a minimal Plumier project. It also host its own web server `http://localhost:8000`. You can run the server from the browser, but you need to build the project to move UI production build to the server static files. 

# Commands
The root package.json contains predefined scripts for convenient. Some command uses typescript code that stays on `scripts` directory and executed using `ts-node` 

### Run Project Specific Command
To run project specific command you can use [workspace](https://yarnpkg.com/lang/en/docs/cli/workspace/) command, such as:

```bash
# install package to specific project
$ yarn workspace <project name> add <package name>
# execute project specific script
$ yarn workspace <project name> <script name>
```

### Start
This command used to start both UI and Server. Server will be ran in debug mode `--inspect` and debugger will listen to port 9229. Refer to [Debugging](#debugging) for more info about debugging the project

To run the command simply 

```bash
$ yarn start
```

### Clean
This command used to clean the project, it will clean the build directory and all generated JS file if any. The logic stays on `scripts/cleanup.ts` 

To run the command simply 

```bash
$ yarn clean
```

### Kill 
This command used to kill the port used by UI and Server. This command useful when the port is locked by previous ran that was not closed. 

To run the command simply 

```bash
$ yarn kill
```

### Build
This command used to make a deployment build. The code will be build on the root folder named `build`.  Refer to [Deployment](#deployment) for more information

To run the command simply 

```bash
$ yarn build
```

### Generate Controller
This command generate controller based on provided model name

To run the command simply


### Knex
This command is shortcut to knex command line app installed in server project, all knex parameter will work

To run the command simply

```bash
# migrate to latest
$ yarn knex migrate:latest
# rollback
$ yarn knex migrate:rollback
```

# Debugging
It is recommended to use VSCode to debug the project, You can use other editor/IDE, but this project provided VSCode `lunch.json` for convenion.

Keep in mind debugging Server and UI uses different lunch configuration so it should debugged separately. 

### Debugging Prerequisites
* VSCode
* [Debugger for Chrome](https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome) Extension to debug UI

### Debugging UI
Debugging UI is done in steps below:
* Start the project (if not started yet) by `$ yarn start` 
* Place break point in any files `ts` or `tsx` you like 
* From VSCode debug work bench dropdown select **Debug UI** and start debug by clicking the green play button.
* The UI will be re-launch in a new google chrome window
* Interact with the UI to reach the function you want to debug and use the debugger toolbar to step in, step over etc.
* To stop debugging, click the red stop button from the debug toolbar. 
  
> Keep in mind, you only need to start the project once and start/stop debugger many time you like. Stopping debugger is only disconnect debugger with the process not killing it.

### Debugging Server
Debugging Server steps are the same as debugging UI. It done in steps below:
* Make sure the project is started. 
* Place break point in any `ts` files you like 
* From VSCode debug work bench dropdown select **Debug Server** and start debug by clicking the green play button.
* Interact with the UI to reach the function you want to debug and use the debugger toolbar to step in, step over etc.
* To stop debugging, click the red stop button from the debug toolbar. 

# Deployment
Build command will build the UI and Server into optimized JavaScript files. 
* `$ yarn build` to build the project.
* Project will be built into `build` directory.
* Start script provided on root package.json which call server start script.
* To start project simply `yarn start` or `npm start` but Yarn must be installed
