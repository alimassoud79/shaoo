# Shao-Airline

## Team Members
* Ali Massoud

* Shady Ahmed

* Hatem Nair

* Hania Ashraf

* Omar Emad

## Start file

app.js


## port

3000



## Getting Started
This repository aims to contain an airline ticket reservation system website. There are many functionalties helpful within this website.
Reserving online, recieving the airplane ticket and online payment using visa/mastercard.


## Available Scripts

### `npm i`

Installs all the packages used in the project.<br>

### `nodemon app.js`

Runs both the client app and the server app in development mode.<br>
`nodemon` is used in place of `node` for easier development.
Open [http://localhost:3000](http://localhost:3000) to view the client in the browser.

### `npm start`

Runs the app in the development mode. <br>
Open [http://localhost:3000](http://localhost:3000) to view the client in the browser.


### `npm test`

Launches the test runner in the interactive watch mode.<br>


### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

If deploying to heroku this does not need to be run since it is handled by the heroku-postbuild script<br>

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


## Technologies Used (MERN Stack)
  
  - [MongoDB - 4.1.3]() - `npm i mongodb`
  - [Express(.js) - 4.16.1]() - `npm i express`
  - [React(.js) - 17.0.2 ]() - `npm i react`
  - [Nodemon(.js) - 2.0.15]() - `npm i nodemon`

  - [axios - 0.24.0]() - `npm i axios` Axios was used as well to connect the frontend with the backend.

  - Check (https://www.mongodb.com/mern-stack) for more information about MERN stack.


## File structure
#### `bin` - This folder contains the www file which includes the http listeners
- #### `www` - Holds the https and module dependencies
#### `config` - This folder contains the configuration of authentication
- #### `auth.config.js` - This file contains the bezkoder secret key
#### `controller` - These hold all of the callback functions that each route will call 
#### `Models` - This holds all of our data models
#### `public` - This holds all of our static files
#### `react-app`
- #### `build` - This folder holds assets such as images, docs, and fonts
- #### `src`
   - #### `components` - This folder holds all of the different components that will make up our views (react components).
   - #### `Reducers` - Holds all the redux reducers
   - #### `App.js` - This is what renders all of our browser routes and different views
   - #### `index.js` - This is what renders the react app by rendering App.js, should not change
- #### `.gitignore` - Tells git which files to ignore
- #### `package.json` - Defines npm behaviors and packages for the client
- #### `README.md` - A react readme file.
- #### `views` - These represent a unique page on the website. These are still normal react components
#### `app.js` - Defines npm behaviors and packages for the client
#### `package.json` - Defines npm behaviors like the scripts defined in the next section of the README
#### `README.md` - This file!
#### `Sprint tasks.txt` - Holds the tasks distributed on developers
#### `.gitignore` - Tells git which files to ignore







## Functionalities

### Admin Functions

#### Sign In
#### Home Page
#### Add Flights in the database
#### Update Flights
#### Search Flights
#### View Profile
#### Change Profile Information (Name, password, email, etc..)
#### Logout




### User Functions

#### Sign In
#### Home Page
#### Search Flights
#### Reserve Seats in a Flight
#### Confirm reserving the Flight
#### Payment of ticket (Visa - Mastercard - Debit - Discover - American Express)
#### View Reserved Flights
#### View Profile
#### Change Profile Information (Name, password, email, etc..)
#### Logout





### Flight Attributes

#### Flight Number
#### From/To
#### Arrival/Departure Time
#### Type
#### Baggage Allowance
#### Reserved Seats
#### Ticket Price



 ## Credits

 ### Stack Overflow (https://stackoverflow.com/)
 ### GeeksForGeeks (https://www.geeksforgeeks.org/)
 ### Material UI (https://mui.com/)





 ## License

 ### Copyright © Shao AirLines 2021.