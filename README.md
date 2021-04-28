# Pos system
Continue update...

# Features
1. Click product's name and amount that you can add it on the shopping list
2. Click trash icon that can delete item

![image](https://github.com/MarcoLin1/pos/blob/master/Pos_v1.png)
![image](https://github.com/MarcoLin1/pos/blob/master/Pos_v2.png)

# Installation
1. Clone repository to your computer
```
git clone https://github.com/MarcoLin1/pos.git
```
2. CD to project folder
```
cd pos
```
3. Install npm 

4. Install nodemon
```
npm install -g nodemon
```
5. Download [mongodb](https://www.mongodb.com/) and make folder to connect with mongodb 
```
mkdir mongodb-data
cd ~/mongodb/bin
$ ./mongod --dbpath /Users/[your username]/[mongodb-data's path]/mongodb-data
```
6. Create data in mongodb
```
npm run seed
```
7. Initiate server and execute the website
```
nodemon app.js
```
Terminal show the message 
```
Server is running on http://localhost:3000 
mongodb connected!
```

# Development Environment 
* Visual studio code 
* Express: 4.17.1
* Express-handlebars: 5.2.1
* Node.js: 10.15.0
* Nodemon: 2.0.7
* Mongodb: 4.2.13
* Mongoose: 5.12.0
* Robot 3T: 1.4.3
