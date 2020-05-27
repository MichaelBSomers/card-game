This is a MERN(Mongodb Express React Node) Project

backend folder controls the API's and connection to the database

public folder controls the frontend



Start
* Backend - `cd backend && npx nodemon server.js`

    Should see the following if connection is correct: 

        listening on 4000 Database connected: mongodb+srv://Neode:2046Somers@card-game-myl68.mongodb.net/ClanFare?retryWrites=true&w=majority

* Frontend - `cd ~/card-game npm start`
    Should see the following if frontend is correct:

        You can now view card-game in the browser.

            Local:            http://localhost:3000
            On Your Network:  http://192.168.1.74:3000

        Note that the development build is not optimized.
        To create a production build, use npm run build.

    > Navigation
        
        This is done using react-router-dom
            * Pages
                    * Home 
                        This is the Home Page. 
                    * Card Viewer
                        View the complete collection of cards
                        TODO Implment a look up into DB for cards
                    * Deck Viewer
                        View the complete collection of decks
                        TODO Implement a look up into DB for decks
                    * Card Creator
                        Create new cards
                        TODO implement full form to push cards into DB
                    * Deck Creator
                        Create new decks
                        TODO Implement collection in DB for decks.

    > API

        This is done using Axios
            * Post Requests
            * Get Requests

                    
