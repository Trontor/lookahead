# Lookahead | UoM Semester Planner

Lookahead is an online application that allows students at the University of Melbourne to plan their semester. A variety of customisations and optimisations are provided to help students make the most out of their semester.

## Features

- Subject class list viewer
- Time restrictions
- Clash optimisations
- Lecture-skip provisioning
- Class cramming optimisations
- Break provisioning after a specified number of consecutive classes
- Support for streams
- Customisable timetable (drag and drop)
- Most importantly: dark mode

Published at: https://lookahead.rohyl.io/

## Installation Instructions

This project has been built in React frontend with a Node.js backend. This means that to get this running locally, you will have to run two installation scripts. You must have Node.js and consequentially `npm` installed.

### Node.js Dependency Installation

In the root folder, issue the following installation command:

```shell
npm i
```

This should install a number of dependencies and development dependencies to a folder called `node_modules`, where your packages live.

### React JS Dependency Installation

Now, go into the `client` folder and issue the same command. Like so:

```shell
cd client
npm i
```

This should create a `node_modules` folder within the `client` folder.

### Running Locally

In the root folder do

```shell
npm run dev
```

To concurrently boot the backend server and front-end. This might take a while, but should eventually work. If there is some error you can't overcome, just reach out to me or a friend who knows JS.
