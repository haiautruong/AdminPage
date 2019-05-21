let mongoose = require('mongoose');

let dev_db_url = "mongodb+srv://admin0:1234567890@webshop-xftef.mongodb.net/laptop-shop";
//const server = '127.0.0.1:27017'; const database = 'laptop-shop';

let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(
  mongoDB, 
  {
    useNewUrlParser: true
}).then(() => {
      console.log('Database connection successful');
}).catch(err => {
        console.log('Database connection error');
})
  mongoose.Promise = global.Promise;

let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error'));

// let dbs = {   production: {} }; class Database{   constructor(){
// this._connect();   }   _connect(){     mongoose.connect(
// `mongodb://${server}/${database}`,       {         useNewUrlParser: true
// })     .then(() => {       console.log('Database connection successful');
// })     .catch(err => {       console.log('Database connection error');     })
// }   init(){     let loader = async () => {     let database = await
// this._connect();     dbs.production = database;     }   return loader;   } }
// module.exports = new Database();