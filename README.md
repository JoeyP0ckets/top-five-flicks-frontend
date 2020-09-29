## Top Five Flicks

Top Five Flicks is a React app used search and review movies.  Can create custom watchlists and write Top Five recommendations to share with other cinephiles.

## Prerequisites

Before you begin, ensure you have met the following requirements:

-Installed the latest version of React and Ruby
-Have a <Windows/Linux/Mac> machine. 
-Have Postgresql

## Installing Top Five Flicks

  1. Clone this repository to you local machine.
  2. Once cloned, navigate to the base folder of this repositry.
  3. Run $ bundle install in the terminal to install required gems.
  4. Run $ rails db:setup to set up the database.
  5. Run $ rails s to start application.  
  6. You can now run the app on localhost:3000

  ## Application Structure and Rules
 
 Login
 * Users may create an account by Signing Up with a username and password. 
 * Username and password must be provided and must be unique among users. 
 * Once a user has signed up they may sign in with username/password combo they provided.

## Features

* Users can search for movies from the OMDB database.
* Movie details can be viewed including director, year, actors, and plot.  
* Users can add a movie to their personal watchlist.
* Users can write in-depth movie reviews for any film they want. 
* Users can create Top Five lists that take a genre, accepts five movie    recommendations, and is posted to the Top Five Main page for other users to peruse. 
* All user-created content is shown on their profile for easy access.


