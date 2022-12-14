//import express module 
const express = require('express');
//create app object
const app = express();

//parse functionality for csv files and extraction
const fs = require ('fs');
const csv = require('csv-parser');

//BACK-END STORAGE -  using key-file-storage npm package according to documentation
const kfs = require("key-file-storage")('backend-storage');

//define port number
const port = 3000;

//route object
const router = express.Router();

//parsing data as json format
app.use(express.json());

//empty arrays for parsed csv data values - REPLACE WITH WHAT WE USING
const carbs = [], calories = [], description = [], cholesterol = [], protein = [], lipid = []

let foodDatas = []

//functions used to parse data from CSV files - FOOD
fs.createReadStream('kaggle/food.csv')
    .pipe(csv({
            delimiter: ",",
            columns: true,
            group_columns_by_name: true,
        }))
        .on('data', (data) => {
            // carbs.push(data);
            foodDatas.push(data);
        }).on('end', () => {
            foodData = foodDatas.map(({
                Description: foodName,
                Carbohydrate: carbs,
                Cholesterol: cholesterol,
                Kilocalories: calo,
                Protein: protein,
                TotalLipid: lipid
            }) => ({
                foodName,
                carbs,
                cholesterol,
                calo,
                protein,
                lipid
            }));

            foodDatas = foodData;
        });


//setup serving front-end code
app.use('/', express.static('static'));

//middleware setup - logging
app.use((req, res, next) => { // for all routes
    console.log(req.method + ' request for ' + req.url);
    //console.log('Request: ', req.method, ' Path: ', req.url, 'Time: ', Date.now());
    next(); // keep going
  });



app.get('/food', (req, res) => {
    res.send(foodDatas);
});

app.get('/food/:foodName', (req, res) => {

    let result = foodDatas.filter(function(item) { return item.foodName === req.params.foodName; });

    res.send(result);
});



//install the router at /api/data - removes need for prefixes in other api calls
app.use('/api/data', router);

//notifies on server start
app.listen(port, () =>{
    console.log('Server started: listening on port ' + port);
});