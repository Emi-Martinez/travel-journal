# travel journal
This app is a intended for you to reggister some places where you have travel.
Access to the [demo](https://travel-journal-f0167.firebaseapp.com/)

With travel journal you can:
* Create locations with an image.
* Update your locations.
* Delete the locations.


## How to use
To clone and run this application, you will need [Git](https://git-scm.com/) and [Node.js](https://nodejs.org/en/download/) (wich comes whith [npm](https://www.npmjs.com/)) installed in your computer.
From your command line:
```bash
# Clone this repository
$ git clone https://github.com/Emi-Martinez/travel-journal

# Go into the folder
$ cd travel-jornal

# Install dependencies
$ npm install

# Run the app
$ npm start
```

## For Google log in to work
You must create a **firebase project** and add the **authentication feature** to it:
* Create a [firebase-project](https://firebase.google.com/docs/web/setup#create-project)
* Add the [authentication](https://firebase.google.com/docs/auth/web/google-signin#before_you_begin) feature
* **Copy** your **firebase project api keys** into the file **src/firebase.js**

## API travel-journal
As the las step to get this app fully functioning in your machine:
* Install the travel-journal [API](https://github.com/Emi-Martinez/travel-journal-backend)

## This project was created with create-react-app

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
