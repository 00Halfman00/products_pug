const fs = require('fs'); // to read file using Node's fs library
const path = require('path'); // to join file paths, regardless of operating system /user or \user

const { rootDir } = require('../utils/path'); // tool to get root directory of app
const filePath = path.join(rootDir, 'data', 'products.js');

const readProducts = (callback) => {  // use a callback function that can be versatile in how it is used
  fs.readFile(filePath, (err, data) => {
    return err ? callback([]) : callback(JSON.parse(data)); // so render empty array or JSON.parse(data), which is an array[products]
  });
};

exports.Product = class {
  constructor(title) {
    this.title = title;
  }
  save() {
    readProducts((products) => {
      products[products.length] = this; // so what products? define it in parameter
      fs.writeFile(filePath, JSON.stringify(products), 'utf8', (err) =>
        err ? console.log('writeFile error: ', err) : ''   // console.log error only if there is one
      );
    }); // define a callback that takes an array as an argument, like the callback in readProducts
  }
  static fetchAll(callback) {
    //so go to file where fetchAll is used and define callback function
    readProducts(callback);
  }
};

// before adding a database, learn to store data in a file, so it won't be lost when server is off: npm start
// fs.readFile is written twice to do the same thing so refactor to write it once and use it whenever/wherever
// bot save and fetchAll methods make use of helper function: readProducts that takes a callback
// with an array in its parameter
