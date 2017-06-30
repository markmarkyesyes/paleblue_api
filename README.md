<!-- # paleblue_api
Express API for Paleblue

You will need to create a .env file for the JWT_SECRET

Run tests with jasmine from the root directory



Likes workflow:

MONGO

Like Entity:
	- _id
	- fromUserId
	- fromLng
	- fromLat
	- contentId
	- createdAt

User Entity:
	- add lastActive

ROUTE

- Search likes (populate content > populate userId) where userId = currentUser and user.lastActive < createdAt

REDUX

Likes: [
	{ contentId, fromUserId, fromLng, fromLat, createdAt},
]

Animation flow:

- If receiving user online, triggered by websockets
- Upon login or new visit, trigger animation for all likes since lastActive -->

<a href="https://paleblue.surge.sh">
  <img src="https://github.com/blackwright/paleblue-client/blob/master/public/paleblue.png?raw=true" alt="Paleblue logo" align="left" width="60" height="60">
</a>

# [paleblue](https://paleblue.surge.sh)

A browser-based web application for sharing and experiencing user-submitted content, visualizing user locations around the planet, and emphasizing ephemeral interactions.

This application was inspired by Pale Blue Dot, a photograph of earth as a tiny speck in the vast expanse of space. This photograph was taken by the Voyager I space probe at the request of Carl Sagan, who shared his thoughts on the image:

> To my mind, there is perhaps no better demonstration of the folly of human conceits than this distant image of our tiny world. To me, it underscores our responsibility to deal more kindly and compassionately with one another and to preserve and cherish that pale blue dot, the only home we've ever known.

This is the API portion of Paleblue, which contains the database, route specific database queries, authentication middleware, and socket emitters for use with the front-end.

## Technologies

- Node.js
- Express
- MongoDB / Mongoose ORM
- Passport.js
- Socket.io
- Jasmine
- JSON Web Tokens

## Setup
- $yarn install / $npm i
- $yarn seed / npm run seed
- $touch .env
- $nodemon (If nodemon is not installed globally, install it locally using $yarn add nodemon / npm -i nodemon)

At this point, you will have a local development server running at http://localhost:3001

In order to make the server functional, you will need to set enviroment variables by pasting the following code into the .env file created earlier, then assigning them whatever values are appropriate to your setup.

```
PORT=3001
JWT_SECRET=
EMAIL_USER=//This is for gmail nodemailer transport
EMAIL_PASS=//This is for gmail nodemailer transport
VERIFICATION_EXPIRE_LENGTH=//format: 1d, 3h, 15m, or 45ss
VERIFICATION_HASH_SECRET=
BCRYPT_SECRET=
```

For a Production environment, you will need an environment variable for amazon S3, as well as an environment variable for the Sendgrid mail service.

## Features

- Temporary content managed with MongoDB's TTLMonitor thread.
- jsonwebtoken + PassportJWT + Passport.js for session management and authentication.
- Hand rolled Express middleware for passing custom JSON Error messages to the front end.
- Nodemailer/Sendgrid integration for automated verification e-mail delivery.

## Routes

All routes begin with the path /api/v1

content:
- Get
- Post

likes:
- Get
- Post

login:
- Post

register:
- Post


## Tests

To run the test suit, you will need Jasmine installed globally. To install onto your machine:
```
$npm install jasmine -g
// Or
$yarn global add jasmine
```
Once Jasmine is installed, simply run
`$jasmine spec`
from the root directory. Make sure all environment variables are set before running the test suite.
