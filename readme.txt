***react client
.../kufiber_frontend : npm i ///install lib
.../kufiber_frontend : npm start dev //run

***server
.../server : npm i ///install lib
.../server : nodemon server.js //run


***server connect database

.../server/server/database/database.js

...mongoose.connect(___mongodbdirname, {

-->  ...mongoose.connect('mongodb://localhost:27017/data', {