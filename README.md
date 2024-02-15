# React-MongoDB_API
This is a simple React, MongoDB and Express API using typescript.
#### Running the project
- Download the project
- Open the **frontend folder** on the terminal and type `npm install`
- Type `npm start`
- Open the **backend folder** on another terminal and type `npm install`
- Type `npm dev`
- **NOTE:** You need to reconfig the project to use your own MongoDB Database


#### Recreation process
##### General
- Create one **main folder** for the project
##### Backend
- Create one folder inside the main folder and name it **backend**
- Access the **backend folder** on the terminal and type `npm init -y`
- Create the **src** folder and create two files inside **server.js** and **routes.js**
- Type `yarn add express` on the terminal to install the express framework
- Type `yarn add mongoose` on the terminal to install the MongoDB
- Type  `yarn add dotenv --save` on the terminal to add the dotenv library
- Create a folder **database** inside **src** and create the folder **scheemas** and **controller** inside of the **database** folder
- Create the file **User.js** inside the **scheemas** folder
    - Add `yarn add cors -D` to enable cross-origin for tests and remove later

##### Frontend
- Open the **main folder** on the terminal and type `npx create-react-app frontend`
- Open the **frontend folder** created and type `yarn start` to test if the application is created correctly
- On the terminal type `yarn add react-icons` to add the react icons library
- Delete every file from **src** ***EXCEPT*** for **App.js**, **index.js** and **index.css**
- Type `yarn add axios` on the terminal to install axios to handle html requests
- Create the **service** folder inside **src** and create **api.js** file inside it
