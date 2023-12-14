# Discover-Art

# Walkthrough of your site and its purpose.

We built an Angular app that serves as a platform for users to explore and engage with various forms of artwork. Here are three of some of this app's purposes:

1 - Art Gallery: The app provides a digital gallery or collection of artwork, allowing users to view and appreciate different art pieces conveniently.

2- Artist Profiles: The app can feature profiles of artists, showcasing their portfolios, biographies, and information about their artistic background.

3 - Search and Filter: The app includes search and filtering functionality, enabling users to find artwork based on various criteria such as artist name or keywords.

# What technologies did you use and why?

We used Angular for the front as just because it was the technology we were learning in this class.

We used `Json-server` to mock API endpoints and generate sample data in JSON format. It is a lightweight and easy-to-use tool that can be beneficial when developing an Angular app for various reasons. Here are some reasons for using json-server with an Angular app:

- Mocking Data: Json-server allows developers to quickly mock API endpoints and generate sample data in JSON format. 

- Rapid Prototyping: Json-server enables rapid prototyping by providing a quick and simple way to create a functioning API with dummy data. This allowed us to focus on building the front-end functionality without worrying about complex back-end integration.

- Front-end and Back-end Separation: Using json-server, we could decouple the front-end and back-end development processes.

- Easy Setup and Configuration: Json-server is easy to set up and configure. It requires minimal dependencies and can be installed as a package using npm. Json-server also provides a simple JSON-based configuration file where routes and data can be defined.

- Client-Side Development: Json-server is client-side based, meaning it can be run locally without the need for server-side infrastructure. This made it convenient for us to work on our local machines without the need for complex server setups.

- Learning and Testing: Json-server is an excellent tool for learning and testing API interactions.

# What are the lessons learned from doing this project?

Learned a lot of lessons from this project. Here is a list of some of the things we learned : 

- API Integration Learning: Working with json-server provided us with insights into API integration concepts, such as making HTTP requests, handling responses, data modeling, and handling different CRUD actions (Create, Read, Update, Delete)
- Data Structure Design: While using json-server, we explored and experimented with different data structures and models. This helped us understanding how to structure data within the Angular application's components, services, and models to efficiently represent and manage the art-related information.

# What would you do differently?

While json-server is useful for prototyping and development purposes, it is not intended to replace a full-fledged production-ready server. It is designed to simplify the development process and create a mock API for testing and development purposes. One think I think we would do differently next time in order to  have a more "real world" Angular application we could've used `Express` instead of json-server as it has a Full-Featured Web Framework, Database Integration, and a large community with abundant Resources, to name a few reasons.... 








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

http://localhost:5000/artists <br />
http://localhost:5000/subscribers <br />
http://localhost:5000/contacter

and the homepage to see app obviously:

http://localhost:4200/


currently I am accessing the artist info from the home page just to test it works if you want to look at that :) 


this tutorial was helpful for me also FYI: 

https://www.youtube.com/watch?v=3dHNOWTI7H8

Adam test
