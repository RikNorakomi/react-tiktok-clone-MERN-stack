## Tech used

App hosted at: https://tiktok-clone-react-mongodb.web.app

### FrontEnd:

- React, firebase hosting
- MaterialUI, FlexBox, 3th party ticker library, scroll snap

### BackEnd

- Node.js, Express.js server
- MongoDB, hosting on Heroku
- Mongoose

## packages installed:

- npm install @material-ui/core
- npm install @material-ui/icons
- npm i react-ticker
- npm i axios

// For backend add folder & cd into it

- npm init > define entry point as server.js instead of index.js

Now go into the created pakage.json file in the tiktok-backend folder and add the following line to the [scripts] object:
"start": "node server.js"

and also add the line:
"type": "module",
This will give you ES6 syntax and help with importing classes into your server.js file instead of doing it old school style.

- npm i express mongoose

### Setting up the MongoDB cloud server

Go to mongoDB.com and signIn with your Google account:
If you sign in for the first time you will be asked to define a cloud provider (AWS, Google, Azure) and a region where you want your databse to be setup (Europe/US/etc.). For now we just leave all configurations as is and create a DB with AWS.

-npm i -g nodemon
install this dependency for your homecomputer. If you have done this in the past it is no longer required cause it is already installed.

Now run the command:

- nodemon server.js to start the server and listen to localhost: with the defined port

## Configuring MongoDB

When you've create a MongoDB cluster set up the following

- Go to SECURITY -> Database access to create a user with username and password for your client to auth and connect to MongoDB with
- Go to SECURITY -> Network Access nad for testing purposes you can select 'allow access from anywhere' (DONT DO THIS FOR PRODUCTION EVNIRONMENT!)
- Go to DATA STORAGE -> Clusters => click on connect and go with Connect your Application. And copy the connection string into your application (server.js)

## Using Postman to create request for your backend

--- xxx ---

## Deploying the backend server to Heroku

- create an account via Heroku.com (it's free!)
- login to: https://dashboard.heroku.com/apps
  Click on => create new app

Install the Heroku CLI if not installed and follow the following as shown on the herok page:
https://dashboard.heroku.com/apps/tiktok-mern-backend-tutorial/deploy/heroku-git

\$ heroku login
Clone the repository
Use Git to clone tiktok-mern-backend-tutorial's source code to your local machine.

$ heroku git:clone -a tiktok-mern-backend-tutorial
$ cd tiktok-mern-backend-tutorial
Deploy your changes
Make some changes to the code you just cloned and deploy them to Heroku using Git.

$ git add .
$ git commit -am "make it better"
\$ git push heroku master

- heroku run npm install

(- heroku run npm start )

in the Heroku dashboard get the backend url via Settings => Domain => copy/paste

## App deployement to Firebase Hosting

- create a project via the firebase console
- from the vs code terminal type: firebase init => select hosting => use existing project and select the project you've created in firebase
- What do you want to use as your public directory? _build_
- Configure as a single-page app (rewrite all urls to /index.html)? _Yes_
- firebase deploy

App hosted at: https://tiktok-clone-react-mongodb.web.app

## Tutorial

Tutorial at:
https://www.youtube.com/watch?v=g8yGxDMyGiE

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
