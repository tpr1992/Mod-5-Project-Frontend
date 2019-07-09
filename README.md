This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Mod 5 Project Frontend

Please run the frontend on port 3000, and the backend on port 3001.

- This is my final project for Flatiron School's Immersive Software Engineering course. It is intended to replicate the general functionality of Spotify in order to practice React, as well as learn the ins and outs of OAuth.

- Authorization is done through the Spotify Web API using OAuth. This allows users access to personal information and specific permissions in the form of scope are defined to lay out what my app has permission to use. For this to happen, multiple back and forth connections must be made between my backend, my frontend, and the Spotify API server. With each step auth tokens are issued and user's must have access to their client_secret and their client_id.

- With the in-browser Spotify media player, users can live stream any and all songs available on Spotify. I am also currently working on building my own custom media player, but it is too soon to tell if I will be adding this to the final project.

- Users can search through their personal playlists, as well as artists and tracks.

- Semantic ui is used for styling as well as custom CSS. In order to use the app, users must have a valid Spotify Premium account, as well as have a local server running which can be found at (https://github.com/tpr1992/Mod-5-Project-Backend).

- Please let me know if you have any suggestions or recommendations on how to better implement things as this project is a way for me to refine my skills. I will periodically update this over the coming months and as of today, July 9 2019, this app is still currently a work in progress.


#######################################

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

