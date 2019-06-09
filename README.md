# spotahome-client

## Demo
A viewable demo of the app can be found [here](https://ants-spotahome-client.herokuapp.com/).

## Installation

To install, download the source code, or git clone the repository, and run `npm install`

## Run 

To run the app, run `npm start`

## Testing 

To test the app, run `npm test`

## Notes

I chose to use Apollo client because of the ease of integrating with my Apollo GraphQL server.

Ordinarily, I would use redux for state management and some library like redux-saga for side effects, but time was a constraint here.

An example of work I've done with redux can be seen in another coding exercise I completed [here](https://github.com/antpuleo2586/drones).

I'm not really a web developer so media queries aren't something I've had to deal with in a while, but I tried to make the app somewhat responsive.

I used styled components and flexbox because this is more familiar to the way I style apps in React Native.

I didn't have time to write any component tests, but I would have tested that each component behaves as expected given the received props.
