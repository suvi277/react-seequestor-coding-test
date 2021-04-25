# SeeQuestor Coding chalenge
- This repositiory is a simple web application that renders a series of articles along with info about the author and comments in React App using given sample.json
- Initially it loads first five articles from data and pagination is added to view other articles so that it renders seamlessly
- Each article will render `Show Comments (<no. of comments>)` action. 
- Initially comments are hidden for each Comments
- First three comments of each arcticle will be shown on click of `Show Comment` action of the particular Article. And Comments of other Articles will be hidden
- If Comments length are more than three, then `Show More` action will appear. 
- And next three comment will be rendered on click of `Show More`
- On click of `Show More`, `Show Less` action will appear, to show less comments on click of the action

## About the app
Actually, there are two separated apps. The client which serves the FrontEnd (using React) built using create-react-app, and the server API (in Node/Express).

## How to run the Server
1. In your terminal, navigate to the `server` directory.
2. Run `npm i` to install all dependencies.
3. Run `npm start` to start the app.

## How to run the Client
1. In another terminal, navigate to the `client` directory.
2. Run `npm i` to install all dependencies.
3. Run `npm start` to start the app
3. Run `npm test` to test the app

## Check if they are connected
With the two apps running, open your browser in http://localhost:3000/. to view the list of Articles

