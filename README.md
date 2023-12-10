# Discover-Art


I set up json-server where we can store info about artists we want to display on our art page

https://www.npmjs.com/package/json-server

Another tutorial: https://angular.io/tutorial/first-app/first-app-lesson-14

So our data is coming from db.json in the root of app/ and watched by the json-server - 

if you look at the package.json scripts, you can see :

`"server": "json-server --watch db.json --port 5000"`

so when you guys run our project locally, I think you'll first have to install json-server:

`npm install json-server`

then start the `-json-server`:

`npm run server`

then run the angular app as normal after that:

`ng serve`

and go to the local api endpoint to see our artists, subscribers, and contacters

http://localhost:5000/artists
http://localhost:5000/subscribers
http://localhost:5000/contacter

and the homepage to see app obviously:

http://localhost:4200/


currently I am accessing the artist info from the home page just to test it works if you want to look at that :) 


this tutorial was helpful for me also FYI: 

https://www.youtube.com/watch?v=3dHNOWTI7H8